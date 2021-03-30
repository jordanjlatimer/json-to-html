"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSlamServer = void 0;
var express = require("express");
var fs = require("fs");
var builders_1 = require("./builders");
var reloadScript = function (port) { return "\n<script>\nlet lastUpdate = undefined;\nwindow.setInterval(() => {\n  fetch(\"http://localhost:" + port + "/slamserver\")\n  .then(response => response.json())\n  .then(json => {\n    if (lastUpdate) {\n      if (lastUpdate < new Date(parseInt(json))) {\n        console.log(\"Changes detected. Refreshing page...\")\n        setTimeout(() => window.location.reload(), 600)\n      }\n    } else {\n      lastUpdate = new Date(parseInt(json))\n    }\n  })\n  .catch(err => {\n    console.clear()\n    console.log(\"Disconnected. Connection will resume when server restarts.\")\n    }\n  )\n}, 500)\n</script>\n"; };
var clearCache = function (module) {
    module.children.forEach(function (child) {
        if (/node_modules/.test(child.id) || /dist/.test(child.id)) {
            return;
        }
        else {
            clearCache(child);
        }
    });
    delete require.cache[require.resolve(module.id)];
};
var CreateSlamServer = function (indexFile, port, watchList) {
    var sockets = [];
    var webServer;
    var lastUpdate = Date.now();
    var server = {
        start: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Starting server...\n");
                        return [4 /*yield*/, buildWebserver()];
                    case 1:
                        _a.sent();
                        watchList.forEach(function (item) {
                            var itemChanged = false;
                            fs.watch(item, { recursive: true }).on("change", function () {
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
                        return [2 /*return*/];
                }
            });
        }); },
    };
    var buildWebserver = function () { return __awaiter(void 0, void 0, void 0, function () {
        var newServer, module, pages, resolvedPages, runningServer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newServer = express();
                    module = require.cache[require.resolve(indexFile)];
                    module && clearCache(module);
                    pages = require(indexFile)["default"];
                    return [4 /*yield*/, Promise.all(pages.map(function (page) { return __awaiter(void 0, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!(typeof page === "function")) return [3 /*break*/, 2];
                                    return [4 /*yield*/, page()];
                                case 1:
                                    _a = _b.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    _a = page;
                                    _b.label = 3;
                                case 3: return [2 /*return*/, (_a)];
                            }
                        }); }); }))];
                case 1:
                    resolvedPages = _a.sent();
                    return [4 /*yield*/, resolvedPages.forEach(function (page) { return __awaiter(void 0, void 0, void 0, function () {
                            var build;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, builders_1.buildPage(page)];
                                    case 1:
                                        build = _a.sent();
                                        build.html = build.html.replace("</body>", reloadScript(port));
                                        newServer.get("/slamserver", function (req, res) { return res.send(lastUpdate.toString()); });
                                        ["html", "css", "js"].forEach(function (item) {
                                            newServer.get("/" + page.name + (item === "html" ? "" : "." + item), function (req, res) {
                                                res.setHeader("content-type", "text/" + item);
                                                res.send(build[item]);
                                                res.end();
                                            });
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 2:
                    _a.sent();
                    runningServer = newServer.listen(port, function () {
                        console.clear();
                        console.log("Server listening at http://localhost:" + port);
                        console.log("Pages:");
                        resolvedPages.forEach(function (page) { return console.log("\t" + page.name + ": http://localhost:" + port + "/" + page.name); });
                        console.log("\nLast Updated:", "\x1b[36m", new Date().toLocaleString(), "\x1b[0m");
                    });
                    runningServer.on("connection", function (socket) { return sockets.push(socket); });
                    webServer = runningServer;
                    lastUpdate = Date.now();
                    return [2 /*return*/];
            }
        });
    }); };
    return server;
};
exports.CreateSlamServer = CreateSlamServer;
