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
exports.buildPage = exports.identifyCssElements = void 0;
var cssReset_1 = require("./cssReset");
var generateCss_1 = require("./generateCss");
var utils_1 = require("./utils");
var findElementsWithCSS = function (tree) {
    var _a, _b;
    var finalArray = [];
    if (typeof tree === "object") {
        if ((_a = tree.atts) === null || _a === void 0 ? void 0 : _a.css) {
            finalArray.push(tree);
        }
        (_b = tree["children"]) === null || _b === void 0 ? void 0 : _b.forEach(function (child) {
            finalArray = finalArray.concat(findElementsWithCSS(child));
        });
    }
    return finalArray;
};
var findUniqueCss = function (array) {
    var identities = {};
    var identitiesIndex = 0;
    array.forEach(function (element) {
        if (identitiesIndex === 0) {
            identities[identitiesIndex] = [element];
            identitiesIndex += 1;
        }
        else {
            var matchFound_1 = false;
            Object.keys(identities).forEach(function (key) {
                if (!matchFound_1) {
                    identities[parseInt(key)].forEach(function (item) {
                        var _a, _b;
                        if (!matchFound_1) {
                            if (utils_1.equalObjects(((_a = element.atts) === null || _a === void 0 ? void 0 : _a.css) || {}, ((_b = item.atts) === null || _b === void 0 ? void 0 : _b.css) || {})) {
                                identities[parseInt(key)].push(element);
                                matchFound_1 = true;
                            }
                        }
                    });
                }
            });
            if (!matchFound_1) {
                identities[identitiesIndex] = [element];
                identitiesIndex += 1;
            }
        }
    });
    return identities;
};
var identifyCssElements = function (tree) {
    return findUniqueCss(findElementsWithCSS(tree));
};
exports.identifyCssElements = identifyCssElements;
var constructElement = function (tree, build, components, className) {
    if (typeof tree === "string") {
        build.html += tree;
        return;
    }
    build.html += "<" + tree["tag"];
    if (tree["atts"] || className) {
        var atts = tree["atts"] || {};
        var attsClass = atts["class"] || "";
        var fullClass = className ? (attsClass ? attsClass + " " + className : className) : attsClass;
        var classObject = fullClass ? { class: fullClass } : {};
        build.html += utils_1.parseAtts(__assign(__assign({}, atts), classObject));
    }
    if (utils_1.noChildren(tree["tag"])) {
        build.html += "/>";
    }
    else {
        build.html += ">";
    }
    if (tree["children"]) {
        tree["children"].forEach(function (child) {
            routeChild(child, build, components);
        });
    }
    if (tree["tag"]) {
        if (!utils_1.noChildren(tree["tag"])) {
            build.html += "</" + tree["tag"] + ">";
        }
    }
};
var routeChild = function (tree, build, components) {
    if (typeof tree === "string") {
        build.html += tree;
        return;
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
        constructElement(tree, build, components, className_1);
    }
};
var buildHtmlFromObject = function (tree, build, components) {
    return routeChild(tree, build, components);
};
var buildCss = function (finalObject, components, reset) {
    finalObject.css += reset ? cssReset_1.cssReset : "";
    Object.keys(components).forEach(function (key) {
        var _a;
        var css = (_a = components[parseInt(key)][0].atts) === null || _a === void 0 ? void 0 : _a.css;
        finalObject.css += css ? generateCss_1.buildCssFromObject(".c" + key, css) : "";
    });
};
var buildJs = function (finalObject, components) {
    Object.keys(components).forEach(function (key) {
        var js = components[parseInt(key)][0].atts.js;
        finalObject.js += js ? "(" + js + ")()" : "";
    });
};
var buildPage = function (page) { return __awaiter(void 0, void 0, void 0, function () {
    var finalizedPage, finalizedHtml, components, finalObject;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, page];
            case 1:
                finalizedPage = _a.sent();
                return [4 /*yield*/, finalizedPage.html];
            case 2:
                finalizedHtml = _a.sent();
                components = exports.identifyCssElements(finalizedHtml);
                finalObject = {
                    html: "",
                    css: "",
                    js: "",
                };
                buildCss(finalObject, components, finalizedPage.cssReset);
                buildJs(finalObject, components);
                buildHtmlFromObject(finalizedHtml, finalObject, components);
                finalObject.html = finalObject.html.replace("</head>", "<link rel=stylesheet href=\"./" + finalizedPage.name + ".css\"/></head>\n");
                finalObject.html = finalObject.html.replace("</body>", "<script src=\"./" + finalizedPage.name + ".js\"></script></body>\n");
                return [2 /*return*/, finalObject];
        }
    });
}); };
exports.buildPage = buildPage;
