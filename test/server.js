const { CreateSlamServer } = require("../dist");
const path = require("path");

const watchList = [path.resolve(__dirname, "./pages")];

const indexFile = path.resolve(__dirname, "./pages/index.ts");

const server = CreateSlamServer(indexFile, 3000, watchList);

server.start();
