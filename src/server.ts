import * as fs from "fs";
import { Socket } from "node:net";
import { buildWebserver } from "./builders";

export async function StartSlamServer(indexFile: string, port: number, watchList: string[]): Promise<void> {
  let sockets: Socket[] = [];
  let cache: Record<string, any> = {};

  console.log("Starting server...\n");
  let webServer = await buildWebserver(indexFile, cache, port);
  webServer.on("connection", socket => sockets.push(socket));
  watchList.forEach(item => {
    let itemChanged = false;
    fs.watch(item, { recursive: true }).on("change", () => {
      if (itemChanged) {
        return;
      }
      itemChanged = true;
      console.log("Change detected. Restarting server...\n");
      webServer.close(async () => {
        webServer = await buildWebserver(indexFile, cache, port);
        webServer.on("connection", socket => sockets.push(socket));
        itemChanged = false;
      });
      sockets.forEach(socket => socket.destroy());
    });
  });
}
