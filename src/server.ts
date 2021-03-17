import * as express from "express";
import { Page } from "./page";
import * as path from "path";
import * as fs from "fs";
import { Server } from "node:http";
import { Socket } from "node:net";
import * as tsNode from "ts-node";
tsNode.register();

let reloadScript = (port: number) => `
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
}, 500)
</script>
`;

export const CreateSlamServer = (pages: { name: string; path: string }[], port: number, watchList: string[]) => {
  let sockets: Socket[] = [];
  let webServer: Server;
  let lastUpdate = Date.now();

  const server = {
    start: () => {
      buildWebserver();
      watchList.forEach(item => {
        let itemChanged = false;
        fs.watch(item).on("change", () => {
          if (itemChanged) {
            return;
          }
          itemChanged = true;
          console.log("Change detected. Restarting server...\n");
          webServer.close(() => {
            buildWebserver();
            itemChanged = false;
          });
          sockets.forEach(socket => socket.destroy());
        });
      });
    },
  };

  const buildWebserver = () => {
    const newServer = express();
    pages.map(page => {
      delete require.cache[require.resolve(page.path)];
      const currentPage: Page = require(page.path)["default"];
      currentPage.buildAll();
      currentPage.html = currentPage.html.replace("</body>", reloadScript(port));
      newServer.get("/slamserver", (req, res) => {
        res.send(lastUpdate.toString());
      });
      newServer.get(`/${page.name}`, (req, res) => {
        res.setHeader("content-type", `text/html`);
        res.send(currentPage.html);
        res.end();
      });
      newServer.get(`/${page.name}.css`, (req, res) => {
        res.setHeader("content-type", `text/css`);
        res.send(currentPage.css);
        res.end();
      });
      newServer.get(`/${page.name}.js`, (req, res) => {
        res.setHeader("content-type", `text/js`);
        res.send(currentPage.js);
        res.end();
      });
    });
    let runningServer = newServer.listen(port, () => {
      console.clear();
      console.log(`Server listening at http://localhost:${port}`);
      console.log("Last Updated:", "\x1b[36m", new Date().toLocaleString(), "\x1b[0m");
    });
    runningServer.on("connection", socket => {
      sockets.push(socket);
    });
    webServer = runningServer;
    lastUpdate = Date.now();
  };

  return server;
};
