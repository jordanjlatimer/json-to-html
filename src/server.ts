import * as express from "express";
import * as fs from "fs";
import { Socket } from "node:net";
import { cssReset } from "./cssReset";
import { buildPage, buildPageRoutes, buildReloadScript } from "./otherBuilders";
import { PageRoute, SiteMap } from "./slamInterfaces";

export function clearNodeCache(module?: NodeModule): void {
  module?.children.forEach(child => {
    if (/node_modules/.test(child.id) || /dist/.test(child.id)) {
      return;
    } else {
      clearNodeCache(child);
    }
  });
  module && delete require.cache[require.resolve(module.id)];
}

export async function cacheRouteContent(route: PageRoute, cache: Record<string, any>) {
  if (!cache[route.key] && route.page.content.getter) {
    cache[route.key] = await route.page.content.getter();
  }
}

export function addCssResetRoute(server: express.Application) {
  server.get("/reset.css", (req, res) => {
    res.setHeader("content-type", "text/css");
    res.send(cssReset);
    res.end();
  });
}

export function addSitemapRoute(server: express.Application, routes: PageRoute[]) {
  server.get("/slamserver/sitemap", (req, res) => res.send("<pre>" + JSON.stringify(routes, null, 2) + "</pre>"));
}

export function addLastUpdateRoute(server: express.Application, lastUpdate: number) {
  server.get("/slamserver/last-update", (req, res) => res.send(lastUpdate.toString()));
}

export function addPageRoute(route: PageRoute, cache: Record<string, any>, server: express.Application, port: number) {
  const build = buildPage(route, cache[route.key]);
  build.html = build.html.replace("</body>", buildReloadScript(port));
  ["html", "css", "js"].forEach(item => {
    server.get(route.serverPaths[item as "html" | "css" | "js"], (req, res) => {
      res.setHeader("content-type", `text/${item}`);
      res.send(build[item as "html" | "css" | "js"]);
      res.end();
    });
  });
}

async function preparePage(route: PageRoute, cache: Record<string, any>, server: express.Application, port: number) {
  await cacheRouteContent(route, cache);
  addPageRoute(route, cache, server, port);
}

export function startListening(
  routes: PageRoute[],
  server: express.Application,
  port: number,
  sockets: Socket[],
  lastUpdate: number,
  cache: Record<string, any>,
  clearConsole?: boolean,
  contentOut?: string
) {
  addCssResetRoute(server);
  addLastUpdateRoute(server, lastUpdate);
  addSitemapRoute(server, routes);
  const runningServer = server.listen(port, () => {
    clearConsole && console.clear();
    console.log(`Server listening at http://localhost:${port}`);
    console.log(`Pages:`);
    routes.forEach(route => console.log(`\t${route.key}: http://localhost:${port}${route.serverPaths.html[0]}`));
    console.log("\nLast Updated:", "\x1b[36m", new Date().toLocaleString(), "\x1b[0m");
  });
  runningServer.on("connection", socket => sockets.push(socket));
  contentOut && fs.writeFileSync(contentOut, JSON.stringify(cache, null, 2));
  return runningServer;
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
  clearNodeCache(module);
  const siteMap: SiteMap = await require(indexFile)["default"]();
  const routes: PageRoute[] = buildPageRoutes(siteMap, "/", "");
  await Promise.all(routes.map(route => preparePage(route, cache, newServer, port)));
  addCssResetRoute(newServer);
  addLastUpdateRoute(newServer, lastUpdate);
  addSitemapRoute(newServer, routes);
  return startListening(routes, newServer, port, sockets, lastUpdate, cache, clearConsole, contentOut);
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
