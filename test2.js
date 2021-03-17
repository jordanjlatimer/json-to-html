"use strict";
exports.__esModule = true;
var dist_1 = require("./dist");
var path = require("path");
var pages = [
    {
        name: "index",
        path: path.resolve(__dirname, "test/index.js"),
        exportName: "Index"
    },
];
var server = dist_1.CreateSlamServer(pages, 3000, ["./test"]);
server.start();
