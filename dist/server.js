"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSlamServer = void 0;
var express = require("express");
var fs = require("fs");
var tsNode = require("ts-node");
tsNode.register();
var reloadScript = function (port) { return "\n<script>\nlet lastUpdate = undefined;\nwindow.setInterval(() => {\n  fetch(\"http://localhost:" + port + "/slamserver\")\n  .then(response => response.json())\n  .then(json => {\n    if (lastUpdate) {\n      if (lastUpdate < new Date(parseInt(json))) {\n        console.log(\"Changes detected. Refreshing page...\")\n        setTimeout(() => window.location.reload(), 600)\n      }\n    } else {\n      lastUpdate = new Date(parseInt(json))\n    }\n  })\n}, 500)\n</script>\n"; };
var CreateSlamServer = function (pages, port, watchList) {
    var sockets = [];
    var webServer;
    var lastUpdate = Date.now();
    var server = {
        start: function () {
            buildWebserver();
            watchList.forEach(function (item) {
                var itemChanged = false;
                fs.watch(item).on("change", function () {
                    if (itemChanged) {
                        return;
                    }
                    itemChanged = true;
                    console.log("Change detected. Restarting server...\n");
                    webServer.close(function () {
                        buildWebserver();
                        itemChanged = false;
                    });
                    sockets.forEach(function (socket) { return socket.destroy(); });
                });
            });
        },
    };
    var buildWebserver = function () {
        var newServer = express();
        pages.map(function (page) {
            delete require.cache[require.resolve(page.path)];
            var currentPage = require(page.path)["default"];
            currentPage.buildAll();
            currentPage.html = currentPage.html.replace("</body>", reloadScript(port));
            newServer.get("/slamserver", function (req, res) {
                res.send(lastUpdate.toString());
            });
            newServer.get("/" + page.name, function (req, res) {
                res.setHeader("content-type", "text/html");
                res.send(currentPage.html);
                res.end();
            });
            newServer.get("/" + page.name + ".css", function (req, res) {
                res.setHeader("content-type", "text/css");
                res.send(currentPage.css);
                res.end();
            });
            newServer.get("/" + page.name + ".js", function (req, res) {
                res.setHeader("content-type", "text/js");
                res.send(currentPage.js);
                res.end();
            });
        });
        var runningServer = newServer.listen(port, function () {
            console.clear();
            console.log("Server listening at http://localhost:" + port);
            console.log("Last Updated:", "\x1b[36m", new Date().toLocaleString(), "\x1b[0m");
        });
        runningServer.on("connection", function (socket) {
            sockets.push(socket);
        });
        webServer = runningServer;
        lastUpdate = Date.now();
    };
    return server;
};
exports.CreateSlamServer = CreateSlamServer;
