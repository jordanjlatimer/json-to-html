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
exports.buildWebserver = exports.buildReloadScript = exports.buildPage = exports.buildSlamElementObject = void 0;
var cssReset_1 = require("./cssReset");
var utils_1 = require("./utils");
var express = require("express");
var cssBuilders_1 = require("./cssBuilders");
var htmlBuilders_1 = require("./htmlBuilders");
var jsBuilders_1 = require("./jsBuilders");
function buildSlamElementObject(tag, arg1, arg2) {
    var atts = {};
    var children = [];
    if (arg1) {
        if (typeof arg1 === "string") {
            children.push(arg1);
        }
        else if ("type" in arg1) {
            children.push(arg1);
        }
        else if (Array.isArray(arg1)) {
            children = children.concat(arg1);
        }
        else {
            atts = arg1;
        }
    }
    if (arg2) {
        arg2.forEach(function (child) {
            if (Array.isArray(child)) {
                children = children.concat(child);
            }
            else {
                children.push(child);
            }
        });
    }
    return {
        type: "element",
        tag: tag,
        atts: atts,
        children: children,
    };
}
exports.buildSlamElementObject = buildSlamElementObject;
function buildPage(page, content) {
    var finalPage = typeof page.html === "function" ? page.html(content) : page.html;
    var components = utils_1.determineSimilarElementsByCss(utils_1.collectElementsWithCss(finalPage));
    var build = {
        html: htmlBuilders_1.buildPageHtmlString(finalPage, components),
        css: cssBuilders_1.buildPageCssString(components, page.globalStyles),
        js: jsBuilders_1.buildPageJsString(components),
    };
    build.html = page.cssReset
        ? build.html.replace("</head>", "<link rel=stylesheet href=\"./reset.css\"/></head>\n")
        : build.html;
    build.html = build.html.replace("</head>", "<link rel=stylesheet href=\"./" + page.name + ".css\"/></head>\n");
    build.html = build.html.replace("</body>", "<script src=\"./" + page.name + ".js\"></script></body>\n");
    return build;
}
exports.buildPage = buildPage;
function buildReloadScript(port) {
    return "\n<script>\nlet lastUpdate = undefined;\nwindow.setInterval(() => {\n  fetch(\"http://localhost:" + port + "/slamserver\")\n  .then(response => response.json())\n  .then(json => {\n    if (lastUpdate) {\n      if (lastUpdate < new Date(parseInt(json))) {\n        console.log(\"Changes detected. Refreshing page...\")\n        setTimeout(() => window.location.reload(), 600)\n      }\n    } else {\n      lastUpdate = new Date(parseInt(json))\n    }\n  })\n  .catch(err => {\n    console.clear()\n    console.log(\"Disconnected. Connection will resume when server restarts.\")\n    }\n  )\n}, 500)\n</script>\n";
}
exports.buildReloadScript = buildReloadScript;
function buildWebserver(indexFile, cache, port) {
    return __awaiter(this, void 0, void 0, function () {
        var lastUpdate, newServer, module, pages, runningServer;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lastUpdate = Date.now();
                    newServer = express();
                    module = require.cache[require.resolve(indexFile)];
                    module && utils_1.clearCache(module);
                    return [4 /*yield*/, require(indexFile)["default"]()];
                case 1:
                    pages = _a.sent();
                    return [4 /*yield*/, Promise.all(pages.map(function (page) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        if (!cache[page.name]) return [3 /*break*/, 1];
                                        return [2 /*return*/];
                                    case 1:
                                        if (!page.content) return [3 /*break*/, 3];
                                        _a = cache;
                                        _b = page.name;
                                        return [4 /*yield*/, page.content()];
                                    case 2:
                                        _a[_b] = _c.sent();
                                        _c.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 2:
                    _a.sent();
                    pages.forEach(function (page) {
                        var build = buildPage(page, cache[page.name]);
                        build.html = build.html.replace("</body>", buildReloadScript(port));
                        newServer.get("/slamserver", function (req, res) { return res.send(lastUpdate.toString()); });
                        ["html", "css", "js"].forEach(function (item) {
                            newServer.get("/" + page.name + (item === "html" ? "" : "." + item), function (req, res) {
                                res.setHeader("content-type", "text/" + item);
                                res.send(build[item]);
                                res.end();
                            });
                        });
                    });
                    newServer.get("/reset.css", function (req, res) {
                        res.setHeader("content-type", "text/css");
                        res.send(cssReset_1.cssReset);
                        res.end();
                    });
                    runningServer = newServer.listen(port, function () {
                        console.clear();
                        console.log("Server listening at http://localhost:" + port);
                        console.log("Pages:");
                        pages.forEach(function (page) { return console.log("\t" + page.name + ": http://localhost:" + port + "/" + page.name); });
                        console.log("\nLast Updated:", "\x1b[36m", new Date().toLocaleString(), "\x1b[0m");
                    });
                    return [2 /*return*/, runningServer];
            }
        });
    });
}
exports.buildWebserver = buildWebserver;
