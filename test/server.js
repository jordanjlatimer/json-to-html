const { CreateSlamServer } = require("../dist");
const path = require("path");

const pages = [
  {
    name: "index",
    path: path.resolve(__dirname, "./pages/index.ts"),
  },
];

const watchList = [path.resolve(__dirname, "./pages")];

const server = CreateSlamServer(pages, 3000, watchList);

server.start();
