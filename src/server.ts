import * as express from "express";
import { Page } from "./slamInterfaces";
import * as fs from "fs";
import { Server } from "node:http";
import { Socket } from "node:net";
import * as tsNode from "ts-node";
import { buildPage } from "./builders";

tsNode.register({
  compilerOptions: {
    module: "CommonJS",
    moduleResolution: "node",
    strict: true,
    resolveJsonModule: true,
    allowSyntheticDefaultImports: true,
  },
});

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
          webServer.close(() => {
            buildWebserver();
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
    const pages: Page[] = require(indexFile)["default"];
    await pages.map(async page => {
      const build = await buildPage(page);
      build.html = build.html.replace("</body>", reloadScript(port));
      newServer.get("/slamserver", (req, res) => {
        res.send(lastUpdate.toString());
      });
      newServer.get(`/${page.name}`, (req, res) => {
        res.setHeader("content-type", `text/html`);
        res.send(build.html);
        res.end();
      });
      newServer.get(`/${page.name}.css`, (req, res) => {
        res.setHeader("content-type", `text/css`);
        res.send(build.css);
        res.end();
      });
      newServer.get(`/${page.name}.js`, (req, res) => {
        res.setHeader("content-type", `text/js`);
        res.send(build.js);
        res.end();
      });
    });
    let runningServer = newServer.listen(port, () => {
      console.clear();
      console.log(`Server listening at http://localhost:${port}`);
      console.log(`Pages:`);
      pages.forEach(page => console.log(`\t${page.name}: http://localhost:${port}/${page.name}`));
      console.log("\nLast Updated:", "\x1b[36m", new Date().toLocaleString(), "\x1b[0m");
    });
    runningServer.on("connection", socket => {
      sockets.push(socket);
    });
    webServer = runningServer;
    lastUpdate = Date.now();
  };

  return server;
};
