import { buildCssFromObject } from "./generateCss";
import { CSSObject } from "./baseInterfaces";
import { buildHtmlFromObject, identifyComponents } from "./builders";
import * as fs from "fs";
import { SlamElement, SlamComponent, Child } from "./baseInterfaces";

export interface Page {
  readonly type: "page";
  name: string;
  html: SlamElement;
  css?: CSSObject;
  js?: () => void;
  components: {
    [key: number]: SlamComponent[];
  };
  finalBuild: {
    html: string;
    css: string;
    js: string;
  };
  buildHtml: () => void;
  buildCss: () => void;
  buildJs: () => void;
  buildAll: () => void;
  writeFiles: (paths?: { htmlPath?: string; cssPath?: string; jsPath?: string }) => void;
}

interface PageConfig {
  name: string;
  html: SlamElement;
  css?: CSSObject;
  js?: () => void;
}

export function CreatePage(config: PageConfig): Page {
  const page: Page = {
    get type(): "page" {
      return "page";
    },
    name: config.name,
    html: config.html,
    css: config.css,
    js: config.js,
    components: {},
    finalBuild: {
      html: "<!DOCTYPE html>",
      css: "",
      js: "",
    },
    buildHtml: () => {
      page.finalBuild.html = page.html ? buildHtmlFromObject(page.html, page.components) : "";
    },
    buildCss: () => {
      page.components = page.html ? identifyComponents(page.html) : {};
      page.finalBuild.css = page.css ? buildCssFromObject("html", page.css) : "";
      Object.keys(page.components).forEach(key => {
        let css = page.components[parseInt(key)][0].css;
        page.finalBuild.css += css ? buildCssFromObject(`.c${key}`, css) : "";
      });
    },
    buildJs: () => {
      page.finalBuild.js = page.js ? `(${page.js})()` : "";
      Object.keys(page.components).forEach(key => {
        let js = page.components[parseInt(key)][0].js;
        page.finalBuild.js += js ? `(${js})()` : "";
      });
    },
    buildAll: () => {
      page.buildCss();
      page.buildJs();
      page.buildHtml();
      page.finalBuild.html = page.finalBuild.html.replace(
        "</head>",
        `<link rel=stylesheet href="./${page.name}.css"/></head>\n`
      );
      page.finalBuild.html = page.finalBuild.html.replace(
        "</body>",
        `<script src="./${page.name}.js"></script></body>\n`
      );
    },
    writeFiles: (paths?: { htmlPath?: string; cssPath?: string; jsPath?: string }) => {
      fs.writeFileSync(paths?.htmlPath ? paths.htmlPath : `./${page.name}.html`, page.finalBuild.html);
      fs.writeFileSync(paths?.cssPath ? paths.cssPath : `./${page.name}.css`, page.finalBuild.css);
      fs.writeFileSync(paths?.jsPath ? paths.jsPath : `./${page.name}.js`, page.finalBuild.js);
    },
  };
  return page;
}

interface SlamElementBase {
  tag: string;
  atts?: any;
  children?: Child[];
}

interface SlamComponentBase {
  html: SlamElement;
  css?: CSSObject;
  js?: () => void;
}

export function CreateComponent<T>(componentFunction: (props: T) => SlamComponentBase): (props: T) => SlamComponent;
export function CreateComponent<T>(component: SlamComponentBase): SlamComponent;
export function CreateComponent<T>(arg1: ((props: T) => SlamComponentBase) | SlamComponentBase) {
  if (typeof arg1 === "function") {
    return (props: T) => ({
      type: "component" as "component",
      ...arg1(props),
    });
  } else {
    return {
      type: "component" as "component",
      ...arg1,
    };
  }
}

export function CreateElement<T>(elementFunction: (props: T) => SlamElementBase): (props: T) => SlamElement;
export function CreateElement<T>(element: SlamElementBase): SlamElement;
export function CreateElement<T>(arg1: ((props: T) => SlamElementBase) | SlamElementBase) {
  if (typeof arg1 === "function") {
    return (props: T) => ({
      type: "element" as "element",
      ...arg1(props),
    });
  } else {
    return {
      type: "element" as "element",
      ...arg1,
    };
  }
}
