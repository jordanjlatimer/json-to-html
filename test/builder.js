const { BuildFiles } = require("../dist");
const path = require("path");

BuildFiles(path.resolve(__dirname, "./pages/index.ts"), path.resolve(__dirname, "./output"));
