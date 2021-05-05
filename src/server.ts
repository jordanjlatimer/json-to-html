import * as express from "express";
import * as fs from "fs";
import { Socket } from "node:net";
import { cssReset } from "./cssReset";
import { buildPage, buildPageRoutes, buildReloadScript } from "./otherBuilders";
import { PageRoute, SiteMap } from "./slamInterfaces";

export function clearCache(module?: NodeModule): void {
  module?.children.forEach(child => {
    if (/node_modules/.test(child.id) || /dist/.test(child.id)) {
      return;
    } else {
      clearCache(child);
    }
  });
  module && delete require.cache[require.resolve(module.id)];
}

export async function cacheContent(routes: PageRoute[], cache: Record<string, any>) {
  await Promise.all(
    routes.map(async route => {
      if (!cache[route.key]) {
        if (route.page.content.getter) {
          cache[route.key] = await route.page.content.getter();
        }
      }
    })
  );
}

export function addCssResetRoute(server: express.Application) {
  server.get("/reset.css", (req, res) => {
    res.setHeader("content-type", "text/css");
    res.send(cssReset);
    res.end();
  });
}

export function addPageRoutes(
  routes: PageRoute[],
  cache: Record<string, any>,
  server: express.Application,
  port: number,
  lastUpdate: number
) {
  server.get("/slamserver/sitemap", (req, res) => res.send("<pre>" + JSON.stringify(routes, null, 2) + "</pre>"));
  server.get("/slamserver/last-update", (req, res) => res.send(lastUpdate.toString()));
  routes.forEach(route => {
    const build = buildPage(route, cache[route.key]);
    build.html = build.html.replace("</body>", buildReloadScript(port));
    ["html", "css", "js"].forEach(item => {
      server.get(route.serverPaths[item as "html" | "css" | "js"], (req, res) => {
        res.setHeader("content-type", `text/${item}`);
        res.send(build[item as "html" | "css" | "js"]);
        res.end();
      });
    });
  });
}

export function startListening(routes: PageRoute[], server: express.Application, port: number, clearConsole?: boolean) {
  return server.listen(port, () => {
    clearConsole && console.clear();
    console.log(`Server listening at http://localhost:${port}`);
    console.log(`Pages:`);
    routes.forEach(route => console.log(`\t${route.key}: http://localhost:${port}${route.serverPaths.html[0]}`));
    console.log("\nLast Updated:", "\x1b[36m", new Date().toLocaleString(), "\x1b[0m");
  });
}

export async function buildWebserver(
  indexFile: string,
  port: number,
  cache: Record<string, any>,
  sockets: Socket[],
  contentOut?: string,
  clearConsole?: boolean
) {
  const lastUpdate = Date.now();
  const newServer = express();
  let module = require.cache[require.resolve(indexFile)];
  clearCache(module);
  const siteMap: SiteMap = await require(indexFile)["default"]();
  const routes: PageRoute[] = buildPageRoutes(siteMap, "/", "");
  await cacheContent(routes, cache);
  addPageRoutes(routes, cache, newServer, port, lastUpdate);
  addCssResetRoute(newServer);
  const runningServer = startListening(routes, newServer, port, clearConsole);
  runningServer.on("connection", socket => sockets.push(socket));
  contentOut && fs.writeFileSync(contentOut, JSON.stringify(cache, null, 2));
  return runningServer;
}

export async function startServer(
  indexFile: string,
  port: number,
  watchList: string[],
  contentOut?: string,
  clearConsole = true
): Promise<void> {
  const cache: Record<string, any> = {};
  let sockets: Socket[] = [];
  console.log("Starting server...\n");
  let server = await buildWebserver(indexFile, port, cache, sockets, contentOut, clearConsole);
  watchList.forEach(item => {
    let itemChanged = false;
    fs.watch(item, { recursive: true }).on("change", () => {
      if (itemChanged) {
        return;
      }
      itemChanged = true;
      console.log("Change detected. Restarting server...\n");
      server.close(async () => {
        server = await buildWebserver(indexFile, port, cache, sockets);
        itemChanged = false;
      });
      sockets.forEach(socket => socket.destroy());
    });
  });
}
