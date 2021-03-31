import { cssReset } from "./cssReset";
import { buildCssFromObject } from "./cssBuilder";
import { BuildObject, Identification, Child, SlamElement, Page } from "./slamInterfaces";
import { buildAttsString, isChildless, areEqualObjects } from "./utils";
import * as fs from "fs";
import * as path from "path";

function collectElementsWithCss(tree: Child): SlamElement[] {
  let finalArray: SlamElement[] = [];
  if (typeof tree === "object") {
    tree.atts?.css && finalArray.push(tree);
    tree["children"]?.forEach(child => finalArray.push(...collectElementsWithCss(child)));
  }
  return finalArray;
}

function determineSimilarElementsByCss(array: SlamElement[]): Identification {
  let identities: Identification = {};
  let identitiesIndex = 0;
  array.forEach(element => {
    if (identitiesIndex === 0) {
      identities[identitiesIndex] = [element];
      identitiesIndex++;
    } else {
      let matchFound = false;
      Object.keys(identities).forEach(key => {
        if (!matchFound) {
          identities[parseInt(key)].forEach(item => {
            if (!matchFound) {
              if (areEqualObjects(element.atts?.css || {}, item.atts?.css || {})) {
                identities[parseInt(key)].push(element);
                matchFound = true;
              }
            }
          });
        }
      });
      if (!matchFound) {
        identities[identitiesIndex] = [element];
        identitiesIndex++;
      }
    }
  });
  return identities;
}

function appendElementAndChildren(
  tree: SlamElement | string,
  build: BuildObject,
  components: Identification,
  className?: string
): void {
  if (typeof tree === "string") {
    build.html += tree;
    return;
  }
  build.html += `<${tree["tag"]}`;
  if (tree["atts"] || className) {
    const atts = tree["atts"] || {};
    const attsClass = atts["class"] || "";
    const fullClass = className ? (attsClass ? `${attsClass} ${className}` : className) : attsClass;
    const classObject = fullClass ? { class: fullClass } : {};
    build.html += buildAttsString({ ...atts, ...classObject });
  }
  build.html += isChildless(tree["tag"]) ? "/>" : ">";
  tree["children"] && tree["children"].forEach(child => buildHtml(child, build, components));
  build.html += tree["tag"] && !isChildless(tree["tag"]) ? `</${tree["tag"]}>` : "";
}

function buildHtml(tree: Child, build: BuildObject, components: Identification): void {
  if (typeof tree === "string") {
    build.html += tree;
    return;
  } else {
    let className = "";
    Object.keys(components).forEach(key => {
      components[parseInt(key)].forEach(component => {
        if (component === tree) {
          className = `c${key}`;
        }
      });
    });
    appendElementAndChildren(tree, build, components, className);
  }
}

function buildCss(finalObject: BuildObject, components: Identification, reset?: boolean) {
  finalObject.css += reset ? cssReset : "";
  Object.keys(components).forEach(key => {
    let css = components[parseInt(key)][0].atts?.css;
    finalObject.css += css ? buildCssFromObject(`.c${key}`, css) : "";
  });
}

function buildJs(finalObject: BuildObject, components: Identification) {
  Object.keys(components).forEach(key => {
    let js = components[parseInt(key)][0].atts.js;
    finalObject.js += js ? `(${js})()` : "";
  });
}

export function buildPage(page: Page, content: any) {
  let build = typeof page.html === "function" ? page.html(content) : page.html;
  let components = determineSimilarElementsByCss(collectElementsWithCss(build));
  let finalObject = {
    html: "",
    css: "",
    js: "",
  };
  buildCss(finalObject, components, page.cssReset);
  buildJs(finalObject, components);
  buildHtml(build, finalObject, components);
  finalObject.html = finalObject.html.replace("</head>", `<link rel=stylesheet href="./${page.name}.css"/></head>\n`);
  finalObject.html = finalObject.html.replace("</body>", `<script src="./${page.name}.js"></script></body>\n`);
  return finalObject;
}

export async function buildFiles(indexFile: string, outDir: string) {
  const pages: Page[] = require(indexFile)["default"];
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
