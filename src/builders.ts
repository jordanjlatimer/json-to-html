import { cssReset } from "./cssReset";
import { buildCssFromObject } from "./generateCss";
import { BuildObject, Identification, Page, ResolvedChild, SlamElement } from "./slamInterfaces";
import { parseAtts, noChildren, equalObjects } from "./utils";
import * as fs from "fs";
import * as path from "path";
import * as tsNode from "ts-node";

tsNode.register({
  compilerOptions: {
    module: "CommonJS",
    moduleResolution: "node",
    strict: true,
    resolveJsonModule: true,
    allowSyntheticDefaultImports: true,
  },
});

const findElementsWithCSS = (tree: ResolvedChild): SlamElement[] => {
  let finalArray: SlamElement[] = [];
  if (typeof tree === "object") {
    if (tree.atts?.css) {
      finalArray.push(tree);
    }
    tree["children"]?.forEach(child => {
      finalArray = finalArray.concat(findElementsWithCSS(child));
    });
  }
  return finalArray;
};

const findUniqueCss = (array: SlamElement[]) => {
  let identities: Identification = {};
  let identitiesIndex = 0;
  array.forEach(element => {
    if (identitiesIndex === 0) {
      identities[identitiesIndex] = [element];
      identitiesIndex += 1;
    } else {
      let matchFound = false;
      Object.keys(identities).forEach(key => {
        if (!matchFound) {
          identities[parseInt(key)].forEach(item => {
            if (!matchFound) {
              if (equalObjects(element.atts?.css || {}, item.atts?.css || {})) {
                identities[parseInt(key)].push(element);
                matchFound = true;
              }
            }
          });
        }
      });
      if (!matchFound) {
        identities[identitiesIndex] = [element];
        identitiesIndex += 1;
      }
    }
  });
  return identities;
};

export const identifyCssElements = (tree: SlamElement) => {
  return findUniqueCss(findElementsWithCSS(tree));
};

const constructElement = (
  tree: SlamElement | string,
  build: BuildObject,
  components: Identification,
  className?: string
) => {
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
    build.html += parseAtts({ ...atts, ...classObject });
  }
  if (noChildren(tree["tag"])) {
    build.html += "/>";
  } else {
    build.html += ">";
  }
  if (tree["children"]) {
    tree["children"].forEach(child => {
      routeChild(child, build, components);
    });
  }
  if (tree["tag"]) {
    if (!noChildren(tree["tag"])) {
      build.html += `</${tree["tag"]}>`;
    }
  }
};

const routeChild = (tree: ResolvedChild, build: BuildObject, components: Identification) => {
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
    constructElement(tree, build, components, className);
  }
};

const buildHtmlFromObject = (tree: ResolvedChild, build: BuildObject, components: Identification) => {
  return routeChild(tree, build, components);
};

const buildCss = (finalObject: BuildObject, components: Identification, reset?: boolean) => {
  finalObject.css += reset ? cssReset : "";
  Object.keys(components).forEach(key => {
    let css = components[parseInt(key)][0].atts?.css;
    finalObject.css += css ? buildCssFromObject(`.c${key}`, css) : "";
  });
};

const buildJs = (finalObject: BuildObject, components: Identification) => {
  Object.keys(components).forEach(key => {
    let js = components[parseInt(key)][0].atts.js;
    finalObject.js += js ? `(${js})()` : "";
  });
};

export const buildPage = async (page: Page | Promise<Page>) => {
  let finalizedPage = await page;
  let finalizedHtml = await finalizedPage.html;
  let components = identifyCssElements(finalizedHtml);
  let finalObject = {
    html: "",
    css: "",
    js: "",
  };
  buildCss(finalObject, components, finalizedPage.cssReset);
  buildJs(finalObject, components);
  buildHtmlFromObject(finalizedHtml, finalObject, components);
  finalObject.html = finalObject.html.replace(
    "</head>",
    `<link rel=stylesheet href="./${finalizedPage.name}.css"/></head>\n`
  );
  finalObject.html = finalObject.html.replace("</body>", `<script src="./${finalizedPage.name}.js"></script></body>\n`);
  return finalObject;
};

export async function BuildFiles(indexFile: string, outDir: string) {
  const pages: Page[] = require(indexFile)["default"];
  let builds = await Promise.all(
    pages.map(async page => {
      let resolved = await page;
      return {
        name: resolved.name,
        ...(await buildPage(page)),
      };
    })
  );
  builds.forEach(build => {
    fs.writeFileSync(path.resolve(outDir, `${build.name}.html`), build.html);
    fs.writeFileSync(path.resolve(outDir, `${build.name}.css`), build.css);
    fs.writeFileSync(path.resolve(outDir, `${build.name}.js`), build.js);
  });
}
