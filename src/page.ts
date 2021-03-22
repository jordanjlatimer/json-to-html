import { buildCssFromObject } from "./generateCss";
import { buildHtmlFromObject, identifyComponents } from "./builders";
import * as fs from "fs";
import { Identification, CSSObject, ResolvedSlamElement, ResolvedSlamComponent } from "./slamInterfaces";
import { cssReset } from "./cssReset";

export interface Page {
  html: string;
  css: string;
  js: string;
  buildAll: () => Promise<void>;
  writeFiles: (paths?: { htmlPath?: string; cssPath?: string; jsPath?: string }) => void;
}

interface PageConfig {
  name: string;
  html: Promise<ResolvedSlamElement>;
  css?: CSSObject;
  js?: () => void;
  noCssReset?: true;
}

export function CreatePage(config: PageConfig | (() => PageConfig | Promise<PageConfig>)): Page {
  let components: Identification = {};
  const page: Page = {
    html: "<!DOCTYPE html>",
    css: "",
    js: "",
    buildAll: async () => {
      let finalizedHtml: ResolvedSlamElement;
      let finalizedConfig: PageConfig;
      if (typeof config === "function") {
        finalizedConfig = await config();
        finalizedHtml = await finalizedConfig.html;
      } else {
        finalizedConfig = config;
        finalizedHtml = await finalizedConfig.html;
      }
      buildCss(finalizedHtml, finalizedConfig.css, finalizedConfig.noCssReset);
      buildJs();
      buildHtml(finalizedHtml);
      page.html = page.html.replace("</head>", `<link rel=stylesheet href="./${finalizedConfig.name}.css"/></head>\n`);
      page.html = page.html.replace("</body>", `<script src="./${finalizedConfig.name}.js"></script></body>\n`);
    },
    writeFiles: async (paths?: { htmlPath?: string; cssPath?: string; jsPath?: string }) => {
      let finalizedConfig: PageConfig;
      if (typeof config === "function") {
        finalizedConfig = await config();
      } else {
        finalizedConfig = config;
      }
      fs.writeFileSync(paths?.htmlPath ? paths.htmlPath : `./${finalizedConfig.name}.html`, page.html);
      fs.writeFileSync(paths?.cssPath ? paths.cssPath : `./${finalizedConfig.name}.css`, page.css);
      fs.writeFileSync(paths?.jsPath ? paths.jsPath : `./${finalizedConfig.name}.js`, page.js);
    },
  };

  const buildHtml = (tree: ResolvedSlamElement) => {
    page.html = buildHtmlFromObject(tree, components);
  };

  const buildCss = (tree: ResolvedSlamElement, pageCss?: CSSObject, noReset?: true) => {
    components = identifyComponents(tree);
    page.css += noReset ? "" : cssReset;
    page.css += pageCss ? buildCssFromObject("html", pageCss) : "";
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

interface SlamComponentBase {
  html: Promise<ResolvedSlamElement>;
  css?: CSSObject;
  js?: () => void;
}

export function CreateComponent(config: SlamComponentBase): Promise<ResolvedSlamComponent> {
  const promise = async (): Promise<ResolvedSlamComponent> => {
    const html = await config.html;
    return {
      type: "component" as "component",
      html: html,
      css: config.css,
      js: config.js,
    };
  };
  return promise();
}
