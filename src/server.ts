import chokidar from "chokidar";
import * as express from "express";
import * as fs from "fs";
import { Socket } from "node:net";
import { cssReset } from "./cssReset";
import { buildPage, buildPageRoutes, buildReloadScript } from "./otherBuilders";
import { BuildObject, Cache, PageRoute, SiteMap } from "./slamInterfaces";

export function clearNodeCache(module: NodeModule): void {
  delete require.cache[require.resolve(module.id)];
}

//Add ability to cache built pages.
export async function cacheRouteContent(route: PageRoute, cache: Cache) {
  if (!cache[route.key].content && route.page.content.getter) {
    cache[route.key].content = await route.page.content.getter();
  }
}

export async function cacheRouteBuild(route: PageRoute, build: BuildObject, cache: Cache) {
  cache[route.key].build = build;
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

export function addPageRoute(route: PageRoute, cache: Cache, server: express.Application, port: number) {
  const build = buildPage(route, cache[route.key].content);
  cacheRouteBuild(route, build, cache);
  build.html = build.html.replace("</body>", buildReloadScript(port));
  ["html", "css", "js"].forEach(item => {
    server.get(route.serverPaths[item as "html" | "css" | "js"], (req, res) => {
      res.setHeader("content-type", `text/${item}`);
      res.send(build[item as "html" | "css" | "js"]);
      res.end();
    });
  });
}

async function preparePage(route: PageRoute, cache: Cache, server: express.Application, port: number) {
  await cacheRouteContent(route, cache);
  addPageRoute(route, cache, server, port);
}

export function startListening(
  routes: PageRoute[],
  server: express.Application,
  port: number,
  sockets: Socket[],
  lastUpdate: number,
  cache: Cache,
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
  cache: Cache,
  sockets: Socket[],
  contentOut?: string,
  clearConsole?: boolean
) {
  const lastUpdate = Date.now();
  const newServer = express();
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
  const cache: Cache = {};
  let sockets: Socket[] = [];
  console.log("Starting server...\n");
  let server = await buildWebserver(indexFile, port, cache, sockets, contentOut, clearConsole);
  let itemChanged = false;
  const watcher = chokidar.watch(watchList);
  watcher.on("change", path => {
    if (itemChanged) {
      return;
    } else {
      let nodeCache = require.cache[require.resolve(path)];
      nodeCache && clearNodeCache(nodeCache);
      console.log("Change detected. Restarting server...\n");
      server.close(async () => {
        server = await buildWebserver(indexFile, port, cache, sockets);
        itemChanged = false;
      });
      sockets.forEach(socket => socket.destroy());
    }
  });
}
