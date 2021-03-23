import { buildCssFromObject } from "./generateCss";
import { buildHtmlFromObject, identifyCssElements } from "./builders";
import * as fs from "fs";
import { Identification, CSSObject, SlamElement } from "./slamInterfaces";
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
  html: Promise<SlamElement>;
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
      let finalizedHtml: SlamElement;
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

  const buildHtml = (tree: SlamElement) => {
    page.html = buildHtmlFromObject(tree, components);
  };

  const buildCss = (tree: SlamElement, pageCss?: CSSObject, noReset?: true) => {
    components = identifyCssElements(tree);
    page.css += noReset ? "" : cssReset;
    page.css += pageCss ? buildCssFromObject("html", pageCss) : "";
    Object.keys(components).forEach(key => {
      let css = components[parseInt(key)][0].atts?.css;
      page.css += css ? buildCssFromObject(`.c${key}`, css) : "";
    });
  };

  const buildJs = () => {
    page.js = page.js ? `(${page.js})()` : "";
    Object.keys(components).forEach(key => {
      let js = components[parseInt(key)][0].atts.js;
      page.js += js ? `(${js})()` : "";
    });
  };

  return page;
}
