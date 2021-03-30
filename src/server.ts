import * as express from "express";
import { BuildObject, ContentPage } from "./slamInterfaces";
import * as fs from "fs";
import { Server } from "node:http";
import { Socket } from "node:net";
import { buildPage } from "./builders";

const reloadScript = (port: number) => `
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

const clearCache = (module: NodeModule) => {
  module.children.forEach(child => {
    if (/node_modules/.test(child.id) || /dist/.test(child.id)) {
      return;
    } else {
      clearCache(child);
    }
  });
  delete require.cache[require.resolve(module.id)];
};

export const CreateSlamServer = (indexFile: string, port: number, watchList: string[]) => {
  let sockets: Socket[] = [];
  let webServer: Server;
  let lastUpdate = Date.now();
  let contentCache: Record<string, any> = {};

  const server = {
    start: async () => {
      console.log("Starting server...\n");
      await buildWebserver();
      watchList.forEach(item => {
        let itemChanged = false;
        fs.watch(item, { recursive: true }).on("change", () => {
          if (itemChanged) {
            return;
          }
          itemChanged = true;
          console.log("Change detected. Restarting server...\n");
          webServer.close(async () => {
            await buildWebserver();
            itemChanged = false;
          });
          sockets.forEach(socket => socket.destroy());
        });
      });
    },
  };

  const buildWebserver = async () => {
    const newServer = express();
    let module = require.cache[require.resolve(indexFile)];
    module && clearCache(module);
    const pages: ContentPage[] = require(indexFile)["default"];
    await Promise.all(
      pages.map(async page => {
        if (contentCache[page.page.name]) {
          return;
        } else {
          if (page.content) {
            contentCache[page.page.name] = await page.content();
          }
        }
      })
    );
    const finalizedPages = pages.map(page => {
      return typeof page.page === "function" ? page.page(contentCache[page.page.name]) : page.page;
    });
    finalizedPages.forEach(page => {
      const build = buildPage(page);
      build.html = build.html.replace("</body>", reloadScript(port));
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
      finalizedPages.forEach(page => console.log(`\t${page.name}: http://localhost:${port}/${page.name}`));
      console.log("\nLast Updated:", "\x1b[36m", new Date().toLocaleString(), "\x1b[0m");
    });
    runningServer.on("connection", socket => sockets.push(socket));
    webServer = runningServer;
    lastUpdate = Date.now();
  };

  return server;
};
