import {
  CSSObject,
  Page,
  SlamElement,
  TagAttributes,
  TagName,
  Child,
  ElementFunction,
  ChildlessElements,
  ChildlessElementFunction,
  ParentalElements,
  ParentalElementFunction,
} from "./slamInterfaces";
import { deepStyleMerge, isChildless } from "./utils";
import { buildPage, buildSlamElementObject, buildWebserver } from "./otherBuilders";
import { Socket } from "node:net";
import * as fs from "fs";
import * as path from "path";
import { cssReset } from "./cssReset";

function SlamPage<T>(arg: (args: T) => SlamElement<"html">): (args: T) => SlamElement<"html"> {
  return arg;
}

function SlamPageBuilder(
  builderFunction: () => Array<Page | Promise<Page>> | Promise<Array<Page | Promise<Page>>>
): () => Array<Page | Promise<Page>> | Promise<Array<Page | Promise<Page>>> {
  return builderFunction;
}

function SlamComponent<T extends TagName>(arg: () => SlamElement<T>): () => SlamElement<T>;
function SlamComponent<T, U extends TagName>(arg: (args: T) => SlamElement<U>): (args: T) => SlamElement<U>;
function SlamComponent<T, U extends TagName>(arg: (args: T) => SlamElement<U>): (args: T) => SlamElement<U> {
  return arg;
}

function StyledElement<T extends ParentalElements>(
  element: ParentalElementFunction<T>,
  ...styles: CSSObject[]
): ParentalElementFunction<T>;
function StyledElement<T extends ChildlessElements>(
  element: ChildlessElementFunction<T>,
  ...styles: CSSObject[]
): ChildlessElementFunction<T>;
function StyledElement<T extends TagName>(element: SlamElement<T>, ...styles: CSSObject[]): SlamElement<T>;
function StyledElement<T extends TagName>(
  element: ElementFunction<T> | SlamElement<T>,
  ...styles: CSSObject[]
): ElementFunction<T> | SlamElement<T> {
  if (typeof element === "function") {
    const elem = element();
    if (isChildless(elem.tag)) {
      return (arg1?: TagAttributes<T>) => {
        const obj = buildSlamElementObject(elem.tag, arg1);
        obj.atts.css = deepStyleMerge(elem.atts.css, ...styles, obj.atts.css);
        return obj;
      };
    } else {
      return (arg1?: TagAttributes<T> | Child, ...arg2: Child[]) => {
        const obj = buildSlamElementObject(elem.tag, arg1, arg2);
        obj.atts.css = deepStyleMerge(elem.atts.css, ...styles, obj.atts.css);
        return obj;
      };
    }
  } else {
    element.atts.css = deepStyleMerge(element.atts.css, ...styles);
    return element;
  }
}

function CreateStyleApplier(styles: CSSObject): <T extends ParentalElements>(element: SlamElement<T>) => SlamElement<T>;
function CreateStyleApplier(
  styles: CSSObject,
  childless: true
): <T extends ChildlessElements>(element: SlamElement<T>) => SlamElement<T>;
function CreateStyleApplier(styles: CSSObject, childless = false) {
  if (childless) {
    return <T extends ChildlessElements>(element: SlamElement<T>) => StyledElement(element, styles);
  } else {
    return <T extends ParentalElements>(element: SlamElement<T>) => StyledElement(element, styles);
  }
}

async function StartSlamServer(
  indexFile: string,
  port: number,
  watchList: string[],
  contentOut?: string
): Promise<void> {
  let sockets: Socket[] = [];
  let cache: Record<string, any> = {};

  console.log("Starting server...\n");
  let webServer = await buildWebserver(indexFile, cache, port);
  contentOut && fs.writeFileSync(contentOut, JSON.stringify(cache));
  webServer.on("connection", socket => sockets.push(socket));
  watchList.forEach(item => {
    let itemChanged = false;
    fs.watch(item, { recursive: true }).on("change", () => {
      if (itemChanged) {
        return;
      }
      itemChanged = true;
      console.log("Change detected. Restarting server...\n");
      webServer.close(async () => {
        webServer = await buildWebserver(indexFile, cache, port);
        webServer.on("connection", socket => sockets.push(socket));
        itemChanged = false;
      });
      sockets.forEach(socket => socket.destroy());
    });
  });
}

async function writeFiles(indexFile: string, outDir: string): Promise<void> {
  const pages: Page[] = await require(indexFile)["default"]();
  const includeReset = pages.some(page => page.cssReset);
  let builds = await Promise.all(
    pages.map(async page => {
      let content = page.content ? await page.content() : undefined;
      return {
        name: page.name,
        ...buildPage(page, content),
      };
    })
  );
  builds.forEach(build => {
    fs.writeFileSync(path.resolve(outDir, `${build.name}.html`), build.html);
    fs.writeFileSync(path.resolve(outDir, `${build.name}.css`), build.css);
    fs.writeFileSync(path.resolve(outDir, `${build.name}.js`), build.js);
    includeReset && fs.writeFileSync(path.resolve(outDir, "reset.css"), cssReset);
  });
}

export const Slam = {
  page: SlamPage,
  pageBuilder: SlamPageBuilder,
  component: SlamComponent,
  styleApplier: CreateStyleApplier,
  styled: StyledElement,
  startServer: StartSlamServer,
  writeFiles: writeFiles,
};
