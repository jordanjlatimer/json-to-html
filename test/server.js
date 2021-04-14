const { Slam } = require("../dist");
const path = require("path");

const watchList = [path.resolve(__dirname, "./pages")];

const indexFile = path.resolve(__dirname, "./index.ts");

Slam.startServer(indexFile, 3000, watchList);
