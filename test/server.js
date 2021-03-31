const { StartSlamServer } = require("../dist");
const path = require("path");

const watchList = [path.resolve(__dirname, "./pages")];

const indexFile = path.resolve(__dirname, "./pages/index.ts");

StartSlamServer(indexFile, 3000, watchList);
