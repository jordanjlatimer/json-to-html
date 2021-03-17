import { CreateSlamServer } from "./dist";
import * as path from "path";

const pages = [
  {
    name: "index",
    path: path.resolve(__dirname, "test/index.js"),
    exportName: "Index",
  },
];

const server = CreateSlamServer(pages, 3000, ["./test"]);

server.start();
