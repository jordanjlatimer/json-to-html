"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSlamServer = void 0;
var express = require("express");
var fs = require("fs");
var CreateSlamServer = function (pages, port, watchList) {
    var server = {
        pages: pages,
        port: port,
        sockets: [],
        webServer: undefined,
        buildWebserver: function () {
            var webServer = express();
            server.pages.map(function (page) {
                delete require.cache[require.resolve(page.path)];
                var currentPage = require(page.path)["default"];
                currentPage.buildAll();
                webServer.get("/" + page.name, function (req, res) {
                    res.setHeader("content-type", "text/html");
                    res.send(currentPage.finalBuild.html);
                    res.end();
                });
                webServer.get("/" + page.name + ".css", function (req, res) {
                    res.setHeader("content-type", "text/css");
                    res.send(currentPage.finalBuild.css);
                    res.end();
                });
                webServer.get("/" + page.name + ".js", function (req, res) {
                    res.setHeader("content-type", "text/js");
                    res.send(currentPage.finalBuild.js);
                    res.end();
                });
            });
            var runningServer = webServer.listen(server.port, function () {
                console.log("Server listening on port " + server.port + ".");
            });
            runningServer.on("connection", function (socket) {
                server.sockets.push(socket);
            });
            server.webServer = runningServer;
        },
        start: function () {
            server.buildWebserver();
            watchList.forEach(function (item) {
                var itemChanged = false;
                fs.watch(item).on("change", function () {
                    if (itemChanged) {
                    }
                    else {
                        itemChanged = true;
                        console.log("\x1b[36m", new Date().toLocaleString(), "\x1b[0m", "Change detected. Restarting server...");
                        server.webServer.close(function () {
                            server.buildWebserver();
                            itemChanged = false;
                        });
                        server.sockets.forEach(function (socket) { return socket.destroy(); });
                    }
                });
            });
        },
    };
    return server;
};
exports.CreateSlamServer = CreateSlamServer;
