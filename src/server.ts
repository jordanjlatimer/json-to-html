import * as express from "express";
import { Page } from "./page";
import * as path from "path";
import * as fs from "fs";
import { Server } from "node:http";
import { Socket } from "node:net";

export const CreateSlamServer = (pages: { name: string; path: string }[], port: number, watchList: string[]) => {
  const server = {
    pages: pages,
    port: port,
    sockets: [] as Socket[],
    webServer: (undefined as unknown) as Server,
    buildWebserver: () => {
      const webServer = express();
      server.pages.map(page => {
        delete require.cache[require.resolve(page.path)];
        const currentPage: Page = require(page.path)["default"];
        currentPage.buildAll();
        webServer.get(`/${page.name}`, (req, res) => {
          res.setHeader("content-type", `text/html`);
          res.send(currentPage.finalBuild.html);
          res.end();
        });
        webServer.get(`/${page.name}.css`, (req, res) => {
          res.setHeader("content-type", `text/css`);
          res.send(currentPage.finalBuild.css);
          res.end();
        });
        webServer.get(`/${page.name}.js`, (req, res) => {
          res.setHeader("content-type", `text/js`);
          res.send(currentPage.finalBuild.js);
          res.end();
        });
      });
      let runningServer = webServer.listen(server.port, () => {
        console.log(`Server listening on port ${server.port}.`);
      });
      runningServer.on("connection", socket => {
        server.sockets.push(socket);
      });
      server.webServer = runningServer;
    },
    start: () => {
      server.buildWebserver();
      watchList.forEach(item => {
        let itemChanged = false;
        fs.watch(item).on("change", () => {
          if (itemChanged) {
          } else {
            itemChanged = true;
            console.log("\x1b[36m", new Date().toLocaleString(), "\x1b[0m", "Change detected. Restarting server...");
            server.webServer.close(() => {
              server.buildWebserver();
              itemChanged = false;
            });
            server.sockets.forEach(socket => socket.destroy());
          }
        });
      });
    },
  };
  return server;
};
