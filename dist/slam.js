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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slam = exports.StyledComponent = void 0;
var fs = require("fs");
var path = require("path");
var cssReset_1 = require("./cssReset");
var otherBuilders_1 = require("./otherBuilders");
var server_1 = require("./server");
var utils_1 = require("./utils");
function SlamPage(arg) {
    return arg;
}
function SlamPageBuilder(builder) {
    return builder;
}
function SlamSite(siteGenerator) {
    return siteGenerator;
}
function StyledComponent(func) {
    var styles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        styles[_i - 1] = arguments[_i];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var element = func.apply(void 0, __spreadArray([], __read(args)));
        element.atts.css = utils_1.deepStyleMerge.apply(void 0, __spreadArray([element.atts.css], __read(styles)));
        return element;
    };
}
exports.StyledComponent = StyledComponent;
function StyledElement(element) {
    var styles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        styles[_i - 1] = arguments[_i];
    }
    if (typeof element === "function") {
        var elem_1 = element();
        if (utils_1.isChildless(elem_1.tag)) {
            return function (arg1) {
                var obj = otherBuilders_1.buildSlamElement(elem_1.tag, arg1);
                obj.atts.css = utils_1.deepStyleMerge.apply(void 0, __spreadArray(__spreadArray([elem_1.atts.css], __read(styles)), [obj.atts.css || {}]));
                return obj;
            };
        }
        else {
            return function (arg1) {
                var arg2 = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    arg2[_i - 1] = arguments[_i];
                }
                var obj = otherBuilders_1.buildSlamElement(elem_1.tag, arg1, arg2);
                obj.atts.css = utils_1.deepStyleMerge.apply(void 0, __spreadArray(__spreadArray([elem_1.atts.css], __read(styles)), [obj.atts.css || {}]));
                return obj;
            };
        }
    }
    else {
        element.atts.css = utils_1.deepStyleMerge.apply(void 0, __spreadArray([element.atts.css], __read(styles)));
        return element;
    }
}
function CreateStyleApplier(styles, childless) {
    if (childless === void 0) { childless = false; }
    if (childless) {
        return function (element) { return StyledElement(element, styles); };
    }
    else {
        return function (element) { return StyledElement(element, styles); };
    }
}
function writeFiles(indexFile, outDir) {
    return __awaiter(this, void 0, void 0, function () {
        var pageTree, routes, builds;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, require(indexFile)["default"]()];
                case 1:
                    pageTree = _a.sent();
                    routes = otherBuilders_1.buildPageRoutes(pageTree, "/", "");
                    return [4 /*yield*/, Promise.all(routes.map(function (route) { return __awaiter(_this, void 0, void 0, function () {
                            var page, content, _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        page = route.page;
                                        if (!page.content.getter) return [3 /*break*/, 2];
                                        return [4 /*yield*/, page.content.getter()];
                                    case 1:
                                        _a = _b.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        _a = undefined;
                                        _b.label = 3;
                                    case 3:
                                        content = _a;
                                        return [2 /*return*/, __assign({ route: route.serverPaths.html[1] }, otherBuilders_1.buildPage(route, content))];
                                }
                            });
                        }); }))];
                case 2:
                    builds = _a.sent();
                    builds.forEach(function (build) {
                        fs.writeFileSync(path.resolve(outDir, build.route), build.html);
                        fs.writeFileSync(path.resolve(outDir, build.route), build.css);
                        fs.writeFileSync(path.resolve(outDir, build.route), build.js);
                        fs.writeFileSync(path.resolve(outDir, "reset.css"), cssReset_1.cssReset);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function mergeStyles() {
    var styles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styles[_i] = arguments[_i];
    }
    return utils_1.deepStyleMerge.apply(void 0, __spreadArray([], __read(styles)));
}
exports.Slam = {
    page: SlamPage,
    builder: SlamPageBuilder,
    site: SlamSite,
    applier: CreateStyleApplier,
    merge: mergeStyles,
    styled: {
        element: StyledElement,
        component: StyledComponent,
    },
    serve: server_1.startServer,
    write: writeFiles,
};
