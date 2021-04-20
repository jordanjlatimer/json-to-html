import { Child, SlamElement, Page, BuildObject, TagName, TagAttributes } from "./slamInterfaces";
import { cssReset } from "./cssReset";
import { determineSimilarElementsByCss, collectElementsWithCss, clearCache } from "./utils";
import { Server } from "node:http";
import * as express from "express";
import { buildPageCssString } from "./cssBuilders";
import { buildPageHtmlString } from "./htmlBuilders";
import { buildPageJsString } from "./jsBuilders";

export function buildSlamElementObject<T extends TagName>(
  tag: T,
  arg1?: Child | TagAttributes<T> | Child[],
  arg2?: (Child | Child[])[]
): SlamElement<T> {
  let atts: SlamElement<T>["atts"] = {} as TagAttributes<T>;
  let children: Child[] = [];
  if (arg1) {
    if (typeof arg1 === "string") {
      children.push(arg1);
    } else if ("type" in arg1) {
      children.push(arg1);
    } else if (Array.isArray(arg1)) {
      children = children.concat(arg1);
    } else {
      atts = arg1;
    }
  }
  if (arg2) {
    arg2.forEach(child => {
      if (Array.isArray(child)) {
        children = children.concat(child);
      } else {
        children.push(child);
      }
    });
  }
  return <SlamElement<T>>{
    type: "element",
    tag: tag,
    atts: atts,
    children: children,
  };
}

export function buildPage(page: Page, content: any) {
  let finalPage = typeof page.html === "function" ? page.html(content) : page.html;
  let components = determineSimilarElementsByCss(collectElementsWithCss(finalPage));
  let build = {
    html: buildPageHtmlString(finalPage, components),
    css: buildPageCssString(components, page.globalStyles),
    js: buildPageJsString(components),
  };
  build.html = page.cssReset
    ? build.html.replace("</head>", `<link rel=stylesheet href="./reset.css"/></head>\n`)
    : build.html;
  build.html = build.html.replace("</head>", `<link rel=stylesheet href="./${page.name}.css"/></head>\n`);
  build.html = build.html.replace("</body>", `<script src="./${page.name}.js"></script></body>\n`);
  return build;
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
  newServer.get("/reset.css", (req, res) => {
    res.setHeader("content-type", "text/css");
    res.send(cssReset);
    res.end();
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
