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
exports.startServer = exports.buildWebserver = exports.startListening = exports.addPageRoutes = exports.addCssResetRoute = exports.cacheContent = exports.clearCache = void 0;
var express = require("express");
var fs = require("fs");
var cssReset_1 = require("./cssReset");
var otherBuilders_1 = require("./otherBuilders");
function clearCache(module) {
    module === null || module === void 0 ? void 0 : module.children.forEach(function (child) {
        if (/node_modules/.test(child.id) || /dist/.test(child.id)) {
            return;
        }
        else {
            clearCache(child);
        }
    });
    module && delete require.cache[require.resolve(module.id)];
}
exports.clearCache = clearCache;
function cacheContent(routes, cache) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(routes.map(function (route) { return __awaiter(_this, void 0, void 0, function () {
                        var _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    if (!!cache[route.key]) return [3 /*break*/, 2];
                                    if (!route.page.content.getter) return [3 /*break*/, 2];
                                    _a = cache;
                                    _b = route.key;
                                    return [4 /*yield*/, route.page.content.getter()];
                                case 1:
                                    _a[_b] = _c.sent();
                                    _c.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.cacheContent = cacheContent;
function addCssResetRoute(server) {
    server.get("/reset.css", function (req, res) {
        res.setHeader("content-type", "text/css");
        res.send(cssReset_1.cssReset);
        res.end();
    });
}
exports.addCssResetRoute = addCssResetRoute;
function addPageRoutes(routes, cache, server, port, lastUpdate) {
    server.get("/slamserver/sitemap", function (req, res) { return res.send("<pre>" + JSON.stringify(routes, null, 2) + "</pre>"); });
    server.get("/slamserver/last-update", function (req, res) { return res.send(lastUpdate.toString()); });
    routes.forEach(function (route) {
        var build = otherBuilders_1.buildPage(route, cache[route.key]);
        build.html = build.html.replace("</body>", otherBuilders_1.buildReloadScript(port));
        ["html", "css", "js"].forEach(function (item) {
            server.get(route.serverPaths[item], function (req, res) {
                res.setHeader("content-type", "text/" + item);
                res.send(build[item]);
                res.end();
            });
        });
    });
}
exports.addPageRoutes = addPageRoutes;
function startListening(routes, server, port, clearConsole) {
    return server.listen(port, function () {
        clearConsole && console.clear();
        console.log("Server listening at http://localhost:" + port);
        console.log("Pages:");
        routes.forEach(function (route) { return console.log("\t" + route.key + ": http://localhost:" + port + route.serverPaths.html[0]); });
        console.log("\nLast Updated:", "\x1b[36m", new Date().toLocaleString(), "\x1b[0m");
    });
}
exports.startListening = startListening;
function buildWebserver(indexFile, port, cache, sockets, contentOut, clearConsole) {
    return __awaiter(this, void 0, void 0, function () {
        var lastUpdate, newServer, module, siteMap, routes, runningServer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lastUpdate = Date.now();
                    newServer = express();
                    module = require.cache[require.resolve(indexFile)];
                    clearCache(module);
                    return [4 /*yield*/, require(indexFile)["default"]()];
                case 1:
                    siteMap = _a.sent();
                    routes = otherBuilders_1.buildPageRoutes(siteMap, "/", "");
                    return [4 /*yield*/, cacheContent(routes, cache)];
                case 2:
                    _a.sent();
                    addPageRoutes(routes, cache, newServer, port, lastUpdate);
                    addCssResetRoute(newServer);
                    runningServer = startListening(routes, newServer, port, clearConsole);
                    runningServer.on("connection", function (socket) { return sockets.push(socket); });
                    contentOut && fs.writeFileSync(contentOut, JSON.stringify(cache, null, 2));
                    return [2 /*return*/, runningServer];
            }
        });
    });
}
exports.buildWebserver = buildWebserver;
function startServer(indexFile, port, watchList, contentOut, clearConsole) {
    if (clearConsole === void 0) { clearConsole = true; }
    return __awaiter(this, void 0, void 0, function () {
        var cache, sockets, server;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cache = {};
                    sockets = [];
                    console.log("Starting server...\n");
                    return [4 /*yield*/, buildWebserver(indexFile, port, cache, sockets, contentOut, clearConsole)];
                case 1:
                    server = _a.sent();
                    watchList.forEach(function (item) {
                        var itemChanged = false;
                        fs.watch(item, { recursive: true }).on("change", function () {
                            if (itemChanged) {
                                return;
                            }
                            itemChanged = true;
                            console.log("Change detected. Restarting server...\n");
                            server.close(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, buildWebserver(indexFile, port, cache, sockets)];
                                        case 1:
                                            server = _a.sent();
                                            itemChanged = false;
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            sockets.forEach(function (socket) { return socket.destroy(); });
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.startServer = startServer;
