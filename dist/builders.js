"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.buildWebserver = exports.buildReloadScript = exports.buildFiles = exports.buildPage = exports.buildSlamElementObject = void 0;
var cssReset_1 = require("./cssReset");
var utils_1 = require("./utils");
var fs = require("fs");
var path = require("path");
var tagNames_1 = require("./tagNames");
var express = require("express");
function buildPropertiesString(styles) {
    return Object.keys(styles).reduce(function (a, b) { return "" + a + utils_1.toKebabCase(b) + ":" + styles[b] + ";"; }, "");
}
function buildSelectorString(className, selector, properties) {
    return "" + className + selector + "{" + properties + "}";
}
function buildKeyframeString(keyframe, selectors) {
    return keyframe + "{" + selectors + "}";
}
function buildMediaQueryString(className, query, styleObject) {
    return query + "{" + buildCssFromObject(className, styleObject) + "}";
}
function buildCssFromObject(className, styles, isKeyframe) {
    var rootCss = {};
    var finalString = "";
    Object.keys(styles).forEach(function (key) {
        if (/@keyframes/.test(key)) {
            finalString += buildKeyframeString(key, buildCssFromObject(className, styles[key], true));
        }
        else if (/@media/.test(key)) {
            finalString += buildMediaQueryString(className, key, styles[key]);
        }
        else if (typeof styles[key] === "object") {
            var finalKey = "";
            finalKey += (tagNames_1.tagNames.includes(key) ? ">" : "") + key;
            finalString += buildCssFromObject("" + className + finalKey, styles[key]);
        }
        else {
            //@ts-ignore Following line threw "Expression produces a union type that is too complex to represent.""
            rootCss[key] = styles[key];
        }
    });
    return isKeyframe ? finalString : buildSelectorString(className, "", buildPropertiesString(rootCss)) + finalString;
}
function buildAttsString(atts) {
    var attsText = "";
    Object.keys(atts).forEach(function (att) {
        if (utils_1.isPresentAtt(att.toString())) {
            attsText += " " + att;
        }
        else if (att !== "js" && att !== "css") {
            attsText += " " + att + '="' + atts[att] + '"';
        }
    });
    return attsText;
}
function buildElementAndChildrenStrings(tree, components, className) {
    if (typeof tree === "string") {
        return tree;
    }
    var build = "<" + tree["tag"];
    if (tree["atts"] || className) {
        var atts = tree["atts"] || {};
        var attsClass = atts["class"] || "";
        var fullClass = className ? (attsClass ? attsClass + " " + className : className) : attsClass;
        var classObject = fullClass ? { class: fullClass } : {};
        build += buildAttsString(__assign(__assign({}, atts), classObject));
    }
    build += utils_1.isChildless(tree["tag"]) ? "/>" : ">";
    tree["children"] && tree["children"].forEach(function (child) { return (build += buildHtml(child, components)); });
    build += !utils_1.isChildless(tree["tag"]) ? "</" + tree["tag"] + ">" : "";
    return build;
}
function buildHtml(tree, components) {
    if (typeof tree === "string") {
        return tree;
    }
    else {
        var className_1 = "";
        Object.keys(components).forEach(function (key) {
            components[parseInt(key)].forEach(function (component) {
                if (component === tree) {
                    className_1 = "c" + key;
                }
            });
        });
        return buildElementAndChildrenStrings(tree, components, className_1);
    }
}
function buildCss(components, reset) {
    var build = "";
    build += reset ? cssReset_1.cssReset : "";
    Object.keys(components).forEach(function (key) {
        var _a;
        var css = (_a = components[parseInt(key)][0].atts) === null || _a === void 0 ? void 0 : _a.css;
        build += css ? buildCssFromObject(".c" + key, css) : "";
    });
    return build;
}
function buildJs(components) {
    var build = "";
    Object.keys(components).forEach(function (key) {
        var js = components[parseInt(key)][0].atts.js;
        build += js ? "(" + js + ")()" : "";
    });
    return build;
}
function buildSlamElementObject(arg1, arg2, atts, tag) {
    var children = [];
    if (arg1) {
        if (typeof arg1 === "string") {
            children.push(arg1);
        }
        else if ("type" in arg1) {
            children.push(arg1);
        }
        else {
            atts = arg1;
        }
    }
    children.push.apply(children, arg2);
    return {
        type: "element",
        tag: tag,
        atts: atts,
        children: children.length > 0 ? children : undefined,
    };
}
exports.buildSlamElementObject = buildSlamElementObject;
function buildPage(page, content) {
    var finalPage = typeof page.html === "function" ? page.html(content) : page.html;
    var components = utils_1.determineSimilarElementsByCss(utils_1.collectElementsWithCss(finalPage));
    var build = {
        html: buildHtml(finalPage, components),
        css: buildCss(components, page.cssReset),
        js: buildJs(components),
    };
    build.html = build.html.replace("</head>", "<link rel=stylesheet href=\"./" + page.name + ".css\"/></head>\n");
    build.html = build.html.replace("</body>", "<script src=\"./" + page.name + ".js\"></script></body>\n");
    return build;
}
exports.buildPage = buildPage;
function buildFiles(indexFile, outDir) {
    return __awaiter(this, void 0, void 0, function () {
        var pages, builds;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, require(indexFile)["default"]()];
                case 1:
                    pages = _a.sent();
                    return [4 /*yield*/, Promise.all(pages.map(function (page) { return __awaiter(_this, void 0, void 0, function () {
                            var content, _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!page.content) return [3 /*break*/, 2];
                                        return [4 /*yield*/, page.content()];
                                    case 1:
                                        _a = _b.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        _a = undefined;
                                        _b.label = 3;
                                    case 3:
                                        content = _a;
                                        return [2 /*return*/, __assign({ name: page.name }, buildPage(page, content))];
                                }
                            });
                        }); }))];
                case 2:
                    builds = _a.sent();
                    builds.forEach(function (build) {
                        fs.writeFileSync(path.resolve(outDir, build.name + ".html"), build.html);
                        fs.writeFileSync(path.resolve(outDir, build.name + ".css"), build.css);
                        fs.writeFileSync(path.resolve(outDir, build.name + ".js"), build.js);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.buildFiles = buildFiles;
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
