"use strict";
exports.__esModule = true;
var dist_1 = require("../dist");
var Index = dist_1.CreatePage({
    name: "index",
    html: dist_1.html(dist_1.head(), dist_1.body(dist_1.div("Menu"))),
    css: {
        ">body>div": {
            width: "100%",
            backgroundColor: "red",
            padding: "20px"
        }
    }
});
exports["default"] = Index;
