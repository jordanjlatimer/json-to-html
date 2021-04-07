import { cssReset } from "./cssReset";
import { Identification, Child, SlamElement, Page, CSSObject, ElementAttributes, BuildObject } from "./slamInterfaces";
import {
  isChildless,
  isPresentAtt,
  toKebabCase,
  determineSimilarElementsByCss,
  collectElementsWithCss,
  clearCache,
} from "./utils";
import * as fs from "fs";
import * as path from "path";
import { Properties as CSSProperties } from "csstype";
import { tagNames } from "./tagNames";
import { Server } from "node:http";
import * as express from "express";

function buildPropertiesString(styles: CSSProperties): string {
  return (Object.keys(styles) as Array<keyof CSSObject>).reduce((a, b) => `${a}${toKebabCase(b)}:${styles[b]};`, "");
}

function buildSelectorString(className: string, selector: string, properties: string): string {
  return `${className}${selector}{${properties}}`;
}

function buildKeyframeString(keyframe: string, selectors: string): string {
  return `${keyframe}{${selectors}}`;
}

function buildMediaQueryString(className: string, query: string, styleObject: CSSObject): string {
  return `${query}{${buildCssFromObject(className, styleObject)}}`;
}

function buildCssFromObject(className: string, styles: CSSObject, isKeyframe?: boolean): string {
  let rootCss: CSSProperties = {};
  let finalString = "";
  (Object.keys(styles) as Array<keyof CSSObject>).forEach(key => {
    if (/@keyframes/.test(key)) {
      finalString += buildKeyframeString(key, buildCssFromObject(className, styles[key] as CSSObject, true));
    } else if (/@media/.test(key)) {
      finalString += buildMediaQueryString(className, key, styles[key] as CSSObject);
    } else if (typeof styles[key] === "object") {
      let finalKey = "";
      finalKey += (tagNames.includes(key) ? ">" : "") + key;
      finalString += buildCssFromObject(`${className}${finalKey}`, styles[key] as CSSObject);
    } else {
      //@ts-ignore Following line threw "Expression produces a union type that is too complex to represent.""
      rootCss[key] = styles[key];
    }
  });
  return isKeyframe ? finalString : buildSelectorString(className, "", buildPropertiesString(rootCss)) + finalString;
}

function buildAttsString<T extends ElementAttributes>(atts: T): string {
  let attsText = "";
  (Object.keys(atts) as Array<keyof T>).forEach(att => {
    if (isPresentAtt(att.toString())) {
      attsText += " " + att;
    } else if (att !== "js" && att !== "css") {
      attsText += " " + att + '="' + atts[att] + '"';
    }
  });
  return attsText;
}

function buildElementAndChildrenStrings(
  tree: SlamElement | string,
  components: Identification,
  className?: string
): string {
  if (typeof tree === "string") {
    return tree;
  }
  let build = `<${tree["tag"]}`;
  if (tree["atts"] || className) {
    const atts = tree["atts"] || {};
    const attsClass = atts["class"] || "";
    const fullClass = className ? (attsClass ? `${attsClass} ${className}` : className) : attsClass;
    const classObject = fullClass ? { class: fullClass } : {};
    build += buildAttsString({ ...atts, ...classObject });
  }
  build += isChildless(tree["tag"]) ? "/>" : ">";
  tree["children"] && tree["children"].forEach(child => (build += buildHtml(child, components)));
  build += !isChildless(tree["tag"]) ? `</${tree["tag"]}>` : "";
  return build;
}

function buildHtml(tree: Child, components: Identification): string {
  if (typeof tree === "string") {
    return tree;
  } else {
    let className = "";
    Object.keys(components).forEach(key => {
      components[parseInt(key)].forEach(component => {
        if (component === tree) {
          className = `c${key}`;
        }
      });
    });
    return buildElementAndChildrenStrings(tree, components, className);
  }
}

function buildCss(components: Identification, reset?: boolean): string {
  let build = "";
  build += reset ? cssReset : "";
  Object.keys(components).forEach(key => {
    let css = components[parseInt(key)][0].atts?.css;
    build += css ? buildCssFromObject(`.c${key}`, css) : "";
  });
  return build;
}

function buildJs(components: Identification): string {
  let build = "";
  Object.keys(components).forEach(key => {
    let js = components[parseInt(key)][0].atts.js;
    build += js ? `(${js})();\n` : "";
  });
  return build;
}

export function buildSlamElementObject<T>(
  arg1: Child | T,
  arg2: Child[],
  atts: T | undefined,
  tag: string
): SlamElement {
  let children: SlamElement["children"] = [];
  if (arg1) {
    if (typeof arg1 === "string") {
      children.push(arg1);
    } else if ("type" in arg1) {
      children.push(arg1);
    } else {
      atts = arg1;
    }
  }
  children.push(...arg2);
  return {
    type: "element",
    tag: tag,
    atts: atts,
    children: children.length > 0 ? children : undefined,
  };
}

export function buildPage(page: Page, content: any) {
  let finalPage = typeof page.html === "function" ? page.html(content) : page.html;
  let components = determineSimilarElementsByCss(collectElementsWithCss(finalPage));
  let build = {
    html: buildHtml(finalPage, components),
    css: buildCss(components, page.cssReset),
    js: buildJs(components),
  };
  build.html = build.html.replace("</head>", `<link rel=stylesheet href="./${page.name}.css"/></head>\n`);
  build.html = build.html.replace("</body>", `<script src="./${page.name}.js"></script></body>\n`);
  return build;
}

export async function buildFiles(indexFile: string, outDir: string): Promise<void> {
  const pages: Page[] = await require(indexFile)["default"]();
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
  });
}

export function buildReloadScript(port: number): string {
  return `
<script>
let lastUpdate = undefined;
window.setInterval(() => {
  fetch("http://localhost:${port}/slamserver")
  .then(response => response.json())
  .then(json => {
    if (lastUpdate) {
      if (lastUpdate < new Date(parseInt(json))) {
        console.log("Changes detected. Refreshing page...")
        setTimeout(() => window.location.reload(), 600)
      }
    } else {
      lastUpdate = new Date(parseInt(json))
    }
  })
  .catch(err => {
    console.clear()
    console.log("Disconnected. Connection will resume when server restarts.")
    }
  )
}, 500)
</script>
`;
}

export async function buildWebserver(indexFile: string, cache: Record<string, any>, port: number): Promise<Server> {
  const lastUpdate = Date.now();
  const newServer = express();
  let module = require.cache[require.resolve(indexFile)];
  module && clearCache(module);
  const pages: Page[] = await require(indexFile)["default"]();
  await Promise.all(
    pages.map(async page => {
      if (cache[page.name]) {
        return;
      } else {
        if (page.content) {
          cache[page.name] = await page.content();
        }
      }
    })
  );
  pages.forEach(page => {
    const build = buildPage(page, cache[page.name]);
    build.html = build.html.replace("</body>", buildReloadScript(port));
    newServer.get("/slamserver", (req, res) => res.send(lastUpdate.toString()));
    ["html", "css", "js"].forEach(item => {
      newServer.get(`/${page.name}${item === "html" ? "" : `.${item}`}`, (req, res) => {
        res.setHeader("content-type", `text/${item}`);
        res.send(build[item as keyof BuildObject]);
        res.end();
      });
    });
  });
  let runningServer = newServer.listen(port, () => {
    console.clear();
    console.log(`Server listening at http://localhost:${port}`);
    console.log(`Pages:`);
    pages.forEach(page => console.log(`\t${page.name}: http://localhost:${port}/${page.name}`));
    console.log("\nLast Updated:", "\x1b[36m", new Date().toLocaleString(), "\x1b[0m");
  });
  return runningServer;
}
