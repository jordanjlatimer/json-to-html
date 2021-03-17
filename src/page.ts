import { buildCssFromObject } from "./generateCss";
import { buildHtmlFromObject, identifyComponents } from "./builders";
import * as fs from "fs";
import { SlamElement, SlamComponent, Child, Identification, CSSObject } from "./slamInterfaces";

export interface Page {
  html: string;
  css: string;
  js: string;
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
  let components: Identification = {};
  const page: Page = {
    html: "<!DOCTYPE html>",
    css: "",
    js: "",
    buildAll: () => {
      buildCss();
      buildJs();
      buildHtml();
      page.html = page.html.replace("</head>", `<link rel=stylesheet href="./${config.name}.css"/></head>\n`);
      page.html = page.html.replace("</body>", `<script src="./${config.name}.js"></script></body>\n`);
    },
    writeFiles: (paths?: { htmlPath?: string; cssPath?: string; jsPath?: string }) => {
      fs.writeFileSync(paths?.htmlPath ? paths.htmlPath : `./${config.name}.html`, page.html);
      fs.writeFileSync(paths?.cssPath ? paths.cssPath : `./${config.name}.css`, page.css);
      fs.writeFileSync(paths?.jsPath ? paths.jsPath : `./${config.name}.js`, page.js);
    },
  };

  const buildHtml = () => {
    page.html = config.html ? buildHtmlFromObject(config.html, components) : "";
  };

  const buildCss = () => {
    components = config.html ? identifyComponents(config.html) : {};
    page.css = config.css ? buildCssFromObject("html", config.css) : "";
    Object.keys(components).forEach(key => {
      let css = components[parseInt(key)][0].css;
      page.css += css ? buildCssFromObject(`.c${key}`, css) : "";
    });
  };

  const buildJs = () => {
    page.js = page.js ? `(${page.js})()` : "";
    Object.keys(components).forEach(key => {
      let js = components[parseInt(key)][0].js;
      page.js += js ? `(${js})()` : "";
    });
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
