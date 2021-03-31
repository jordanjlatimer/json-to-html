const { buildFiles } = require("../dist");
const path = require("path");

const indexFile = path.resolve(__dirname, "./pages/index.ts");

const outDir = path.resolve(__dirname, "./output");

buildFiles(indexFile, outDir);
