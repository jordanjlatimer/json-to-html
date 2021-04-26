const { Slam } = require("../dist");
const path = require("path");

const indexFile = path.resolve(__dirname, "./index.ts");

const outDir = path.resolve(__dirname, "./output");

Slam.write(indexFile, outDir);
