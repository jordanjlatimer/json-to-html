import { buildPageCss } from "./cssBuilders";
import { buildHtml } from "./htmlBuilders";
import { buildJs } from "./jsBuilders";
import { Child, PageRoute, SiteMap, SlamElement, TagAttributes, TagName } from "./slamInterfaces";
import { collectElementsWithCss, determineSimilarElementsByCss } from "./utils";

export function buildSlamElement<T extends TagName>(
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

export function buildPageRoutes(tree: SiteMap, path: string, parentKey: string) {
  let routes: PageRoute[] = [];
  Object.keys(tree).forEach(key => {
    const child = tree[key];
    const htmlPaths: string[] = [path + key, path + key + ".html"];
    key === "index" && htmlPaths.push(path);
    let resetPath = "reset.css";
    const slashes = [...path.matchAll(/\//g)];
    console.log(slashes);
    slashes?.forEach((occurance, i) => {
      if (i === 0) {
        resetPath = "./" + resetPath;
      } else if (i === 1) {
        resetPath = "." + resetPath;
      } else {
        resetPath = "../" + resetPath;
      }
    });
    const passKey = parentKey === "" ? key : parentKey + "." + key;
    console.log(passKey);
    if (child["content"]) {
      routes.push({
        key: passKey,
        serverPaths: {
          html: htmlPaths,
          css: path + key + ".css",
          js: path + key + ".js",
        },
        clientPaths: {
          css: "./" + key + ".css",
          js: "./" + key + ".css",
          reset: resetPath,
        },
        page: child,
      });
    } else {
      routes = [...routes, ...buildPageRoutes(child, path + key + "/", passKey)];
    }
  });
  return routes;
}

export function buildPage(route: PageRoute, content: any) {
  const page = route.page;
  let finalPage = page.content.consumer(content);
  let components = determineSimilarElementsByCss(collectElementsWithCss(finalPage));
  let build = {
    html: buildHtml(finalPage, components),
    css: buildPageCss(components, page.globalStyles),
    js: buildJs(components),
  };
  build.html = page.cssReset
    ? build.html.replace("</head>", `<link rel=stylesheet href="${route.clientPaths.reset}"/></head>\n`)
    : build.html;
  build.html = build.html.replace("</head>", `<link rel=stylesheet href="${route.clientPaths.css}"/></head>\n`);
  build.html = build.html.replace("</body>", `<script src="${route.clientPaths.js}"></script></body>\n`);
  return build;
}

export function buildReloadScript(port: number): string {
  return `
<script>
let lastUpdate = undefined;
window.setInterval(() => {
  fetch("http://localhost:${port}/slamserver/last-update")
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
