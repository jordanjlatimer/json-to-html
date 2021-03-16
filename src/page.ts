import { buildCssFromObject } from "./generateCss";
import { CSSObject } from "./baseInterfaces";
import { buildHtmlFromObject, identifyComponents } from "./builders";
import * as fs from "fs";
import { TypedSlamElement, TypedSlamComponent, Child } from "./baseInterfaces";

interface Page {
  readonly type: "page";
  name: string;
  html?: TypedSlamElement;
  css?: CSSObject;
  js?: () => void;
  components: {
    [key: number]: TypedSlamComponent[];
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

export function CreatePage(name: string): Page {
  const page: Page = {
    get type(): "page" {
      return "page";
    },
    name: name,
    html: undefined,
    css: undefined,
    js: undefined,
    components: {},
    finalBuild: {
      html: "<!DOCTYPE html>",
      css: "",
      js: "",
    },
    buildHtml: () => {
      page.finalBuild.html += page.html ? buildHtmlFromObject(page.html, page.components) : "";
      console.log("HTML Built!");
    },
    buildCss: () => {
      page.components = page.html ? identifyComponents(page.html) : {};
      page.finalBuild.css = page.css ? buildCssFromObject("html", page.css) : "";
      Object.keys(page.components).forEach(key => {
        let css = page.components[parseInt(key)][0].css;
        page.finalBuild.css += css ? buildCssFromObject(`.c${key}`, css) : "";
      });
      console.log("CSS Built!");
    },
    buildJs: () => {
      page.finalBuild.js = page.js ? `(${page.js})()` : "";
      Object.keys(page.components).forEach(key => {
        let js = page.components[parseInt(key)][0].js;
        page.finalBuild.js += js ? `(${js})()` : "";
      });
      console.log("JS Built!");
    },
    buildAll: () => {
      console.log(`Building page ${page.name}...`);
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
      console.log(`Page ${page.name} built successfully!`);
    },
    writeFiles: (paths?: { htmlPath?: string; cssPath?: string; jsPath?: string }) => {
      console.log("Writing files...");
      fs.writeFileSync(paths?.htmlPath ? paths.htmlPath : `./${page.name}.html`, page.finalBuild.html);
      fs.writeFileSync(paths?.cssPath ? paths.cssPath : `./${page.name}.css`, page.finalBuild.css);
      fs.writeFileSync(paths?.jsPath ? paths.jsPath : `./${page.name}.js`, page.finalBuild.js);
      console.log("Files written!");
    },
  };
  return page;
}

interface SlamElement {
  tag: string;
  atts?: any;
  children?: Child[];
}

interface SlamComponent {
  html: TypedSlamElement;
  css?: CSSObject;
  js?: () => void;
}

export function CreateComponent<T>(componentFunction: (props: T) => SlamComponent): (props: T) => TypedSlamComponent;
export function CreateComponent<T>(component: SlamComponent): TypedSlamComponent;
export function CreateComponent<T>(arg1: ((props: T) => SlamComponent) | SlamComponent) {
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

export function CreateElement<T>(elementFunction: (props: T) => SlamElement): (props: T) => TypedSlamElement;
export function CreateElement<T>(element: SlamElement): TypedSlamElement;
export function CreateElement<T>(arg1: ((props: T) => SlamElement) | SlamElement) {
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
