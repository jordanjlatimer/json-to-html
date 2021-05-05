import * as fs from "fs";
import * as path from "path";
import { cssReset } from "./cssReset";
import { buildPage, buildPageRoutes, buildSlamElement } from "./otherBuilders";
import { startServer } from "./server";
import {
  Child,
  ChildlessElementFunction,
  ChildlessElements,
  CSSObject,
  ElementFunction,
  Page,
  ParentalElementFunction,
  ParentalElements,
  SiteMap,
  SlamElement,
  TagAttributes,
  TagName,
} from "./slamInterfaces";
import { deepStyleMerge, isChildless } from "./utils";

function SlamPage(arg: Page) {
  return arg;
}

function SlamPageBuilder(builder: () => Page[] | Promise<Page[]>): () => Page[] | Promise<Page[]> {
  return builder;
}

function SlamSite(siteGenerator: () => SiteMap | Promise<SiteMap>) {
  return siteGenerator;
}

export function StyledComponent<T extends TagName>(
  func: () => SlamElement<T>,
  ...styles: (CSSObject | CSSObject[] | undefined)[]
): () => SlamElement<T>;
export function StyledComponent<T extends TagName, U extends any[]>(
  func: (...args: U) => SlamElement<T>,
  ...styles: (CSSObject | CSSObject[] | undefined)[]
): (...args: U) => SlamElement<T>;
export function StyledComponent<T extends TagName, U extends any[]>(
  func: (...args: U) => SlamElement<T>,
  ...styles: (CSSObject | CSSObject[] | undefined)[]
): (...args: U) => SlamElement<T> {
  return (...args: U) => {
    const element = func(...args);
    element.atts.css = deepStyleMerge(element.atts.css, ...styles);
    return element;
  };
}

function StyledElement<T extends ParentalElements>(
  element: ParentalElementFunction<T>,
  ...styles: (CSSObject | CSSObject[] | undefined)[]
): ParentalElementFunction<T>;
function StyledElement<T extends ChildlessElements>(
  element: ChildlessElementFunction<T>,
  ...styles: (CSSObject | CSSObject[] | undefined)[]
): ChildlessElementFunction<T>;
function StyledElement<T extends TagName>(
  element: SlamElement<T>,
  ...styles: (CSSObject | CSSObject[] | undefined)[]
): SlamElement<T>;
function StyledElement<T extends TagName>(
  element: ElementFunction<T> | SlamElement<T>,
  ...styles: (CSSObject | CSSObject[] | undefined)[]
): ElementFunction<T> | SlamElement<T> {
  if (typeof element === "function") {
    const elem = element();
    if (isChildless(elem.tag)) {
      return (arg1?: TagAttributes<T>) => {
        const obj = buildSlamElement(elem.tag, arg1);
        obj.atts.css = deepStyleMerge(elem.atts.css, ...styles, obj.atts.css || {});
        return obj;
      };
    } else {
      return (arg1?: TagAttributes<T> | Child | Child[], ...arg2: (Child | Child[])[]) => {
        const obj = buildSlamElement(elem.tag, arg1, arg2);
        obj.atts.css = deepStyleMerge(elem.atts.css, ...styles, obj.atts.css || {});
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

async function writeFiles(indexFile: string, outDir: string): Promise<void> {
  const pageTree: SiteMap = await require(indexFile)["default"]();
  const routes = buildPageRoutes(pageTree, "/", "");
  let builds = await Promise.all(
    routes.map(async route => {
      const page = route.page;
      let content = page.content.getter ? await page.content.getter() : undefined;
      return {
        route: route.serverPaths.html[1],
        ...buildPage(route, content),
      };
    })
  );
  builds.forEach(build => {
    fs.writeFileSync(path.resolve(outDir, build.route), build.html);
    fs.writeFileSync(path.resolve(outDir, build.route), build.css);
    fs.writeFileSync(path.resolve(outDir, build.route), build.js);
    fs.writeFileSync(path.resolve(outDir, "reset.css"), cssReset);
  });
}

function mergeStyles(...styles: CSSObject[]) {
  return deepStyleMerge(...styles);
}

export const Slam = {
  page: SlamPage,
  builder: SlamPageBuilder,
  site: SlamSite,
  applier: CreateStyleApplier,
  merge: mergeStyles,
  styled: {
    element: StyledElement,
    component: StyledComponent,
  },
  serve: startServer,
  write: writeFiles,
};
