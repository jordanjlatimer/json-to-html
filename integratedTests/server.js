const { Slam } = require("../dist");
const path = require("path");

const watchList = [path.resolve(__dirname, "./pages")];

const indexFile = path.resolve(__dirname, "./index.ts");

const contentOut = path.resolve(__dirname, "./content.json");

Slam.startServer(indexFile, 3000, watchList, contentOut);
