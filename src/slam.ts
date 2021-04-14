import {
  CSSObject,
  Page,
  SlamElement,
  TagAttributes,
  TagName,
  Child,
  ChildlessElements,
  ParentalElements,
} from "./slamInterfaces";
import { isChildless } from "./utils";
import { buildPage, buildSlamElementObject, buildWebserver } from "./otherBuilders";
import { Socket } from "node:net";
import * as fs from "fs";
import * as path from "path";
import { cssReset } from "./cssReset";

function SlamStyles<T extends Record<string, CSSObject>>(arg: T): T {
  return arg;
}

function SlamPage<T>(arg: (args: T) => SlamElement<"html">): (args: T) => SlamElement<"html"> {
  return arg;
}

function SlamPageBuilder(
  builderFunction: () => Array<Page | Promise<Page>> | Promise<Array<Page | Promise<Page>>>
): () => Array<Page | Promise<Page>> | Promise<Array<Page | Promise<Page>>> {
  return builderFunction;
}

function SlamComponent<T>(arg: (args: T) => SlamElement<TagName>): (args: T) => SlamElement<TagName> {
  return arg;
}

function SlamStyledComponent<T extends ChildlessElements>(
  tag: T,
  styles: CSSObject
): (arg1?: TagAttributes<T>) => SlamElement<T>;
function SlamStyledComponent<T extends ParentalElements>(
  tag: T,
  styles: CSSObject
): (arg1?: TagAttributes<T> | Child, ...arg2: Child[]) => SlamElement<T>;
function SlamStyledComponent<T extends TagName>(tag: T, styles: CSSObject) {
  if (isChildless(tag)) {
    return (arg1?: TagAttributes<T>) => {
      const obj = buildSlamElementObject(tag, arg1);
      const css = {
        ...styles,
        ...obj.atts.css,
      };
      obj.atts.css = css;
      return obj;
    };
  } else {
    return (arg1?: TagAttributes<T> | Child, ...arg2: Child[]) => {
      const obj = buildSlamElementObject(tag, arg1, arg2);
      const css = {
        ...styles,
        ...obj.atts.css,
      };
      obj.atts.css = css;
      return obj;
    };
  }
}

async function StartSlamServer(indexFile: string, port: number, watchList: string[]): Promise<void> {
  let sockets: Socket[] = [];
  let cache: Record<string, any> = {};

  console.log("Starting server...\n");
  let webServer = await buildWebserver(indexFile, cache, port);
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
  styles: SlamStyles,
  page: SlamPage,
  pageBuilder: SlamPageBuilder,
  component: SlamComponent,
  styledComponent: SlamStyledComponent,
  startServer: StartSlamServer,
  writeFiles: writeFiles,
};
