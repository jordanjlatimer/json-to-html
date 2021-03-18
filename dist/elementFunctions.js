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
exports.iframe = exports.i = exports.html = exports.hr = exports.hgroup = exports.header = exports.head = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.form = exports.footer = exports.figure = exports.figcaption = exports.fieldset = exports.embed = exports.em = exports.dt = exports.dl = exports.div = exports.dialog = exports.dfn = exports.details = exports.del = exports.dd = exports.datalist = exports.data = exports.colgroup = exports.col = exports.code = exports.cite = exports.caption = exports.canvas = exports.button = exports.br = exports.body = exports.blockquote = exports.bdo = exports.bdi = exports.base = exports.b = exports.audio = exports.aside = exports.article = exports.area = exports.address = exports.abbr = void 0;
exports.th = exports.tfoot = exports.textarea = exports.template = exports.td = exports.tbody = exports.table = exports.sup = exports.summary = exports.sub = exports.strong = exports.span = exports.source = exports.small = exports.slot = exports.select = exports.section = exports.script = exports.samp = exports.s = exports.ruby = exports.rt = exports.rp = exports.q = exports.progress = exports.pre = exports.picture = exports.param = exports.p = exports.output = exports.option = exports.optgroup = exports.ol = exports.object = exports.noscript = exports.nav = exports.meter = exports.meta = exports.menu = exports.mark = exports.map = exports.main = exports.link = exports.li = exports.legend = exports.label = exports.kbd = exports.ins = exports.input = exports.img = void 0;
exports.line = exports.image = exports.g = exports.foreignObject = exports.filter = exports.feTurbulence = exports.feTile = exports.feSpotLight = exports.feSpecularLighting = exports.fePointLight = exports.feOffset = exports.feMorphology = exports.feMergeNode = exports.feMerge = exports.feImage = exports.feGaussianBlur = exports.feFuncR = exports.feFuncG = exports.feFuncB = exports.feFuncA = exports.feFlood = exports.feDropShadow = exports.feDistantLight = exports.feDisplacementMap = exports.feDiffuseLighting = exports.feConvolveMatrix = exports.feComposite = exports.feComponentTransfer = exports.feColorMatrix = exports.feBlend = exports.ellipse = exports.discard = exports.desc = exports.defs = exports.clipPath = exports.circle = exports.animateTransform = exports.animateMotion = exports.animate = exports.a = exports.wbr = exports.video = exports.var_ = exports.ul = exports.u = exports.track = exports.tr = exports.title = exports.time = exports.thead = void 0;
exports.view = exports.use = exports.unknown = exports.tspan = exports.textPath = exports.text = exports.symbol = exports.switch_ = exports.svg = exports.stop = exports.set = exports.rect = exports.radialGradient = exports.polyline = exports.polygon = exports.pattern = exports.path = exports.mpath = exports.metadata = exports.mask = exports.marker = exports.linearGradient = void 0;
var abbr = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "abbr",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.abbr = abbr;
var address = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "address",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.address = address;
var area = function (arg1) { return ({
    tag: "area",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.area = area;
var article = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "article",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.article = article;
var aside = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "aside",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.aside = aside;
var audio = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "audio",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.audio = audio;
var b = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "b",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.b = b;
var base = function (arg1) { return ({
    tag: "base",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.base = base;
var bdi = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "bdi",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.bdi = bdi;
var bdo = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "bdo",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.bdo = bdo;
var blockquote = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "blockquote",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.blockquote = blockquote;
var body = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "body",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.body = body;
var br = function (arg1) { return ({
    tag: "br",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.br = br;
var button = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "button",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.button = button;
var canvas = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "canvas",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.canvas = canvas;
var caption = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "caption",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.caption = caption;
var cite = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "cite",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.cite = cite;
var code = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "code",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.code = code;
var col = function (arg1) { return ({
    tag: "col",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.col = col;
var colgroup = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "colgroup",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.colgroup = colgroup;
var data = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "data",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.data = data;
var datalist = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "datalist",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.datalist = datalist;
var dd = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "dd",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.dd = dd;
var del = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "del",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.del = del;
var details = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "details",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.details = details;
var dfn = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "dfn",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.dfn = dfn;
var dialog = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "dialog",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.dialog = dialog;
var div = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "div",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.div = div;
var dl = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "dl",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.dl = dl;
var dt = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "dt",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.dt = dt;
var em = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "em",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.em = em;
var embed = function (arg1) { return ({
    tag: "embed",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.embed = embed;
var fieldset = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "fieldset",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.fieldset = fieldset;
var figcaption = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "figcaption",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.figcaption = figcaption;
var figure = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "figure",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.figure = figure;
var footer = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "footer",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.footer = footer;
var form = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "form",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.form = form;
var h1 = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "h1",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.h1 = h1;
var h2 = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "h2",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.h2 = h2;
var h3 = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "h3",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.h3 = h3;
var h4 = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "h4",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.h4 = h4;
var h5 = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "h5",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.h5 = h5;
var h6 = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "h6",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.h6 = h6;
var head = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "head",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.head = head;
var header = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "header",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.header = header;
var hgroup = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "hgroup",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.hgroup = hgroup;
var hr = function (arg1) { return ({
    tag: "hr",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.hr = hr;
var html = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "html",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.html = html;
var i = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "i",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.i = i;
var iframe = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "iframe",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.iframe = iframe;
var img = function (arg1) { return ({
    tag: "img",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.img = img;
var input = function (arg1) { return ({
    tag: "input",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.input = input;
var ins = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "ins",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.ins = ins;
var kbd = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "kbd",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.kbd = kbd;
var label = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "label",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.label = label;
var legend = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "legend",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.legend = legend;
var li = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "li",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.li = li;
var link = function (arg1) { return ({
    tag: "link",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.link = link;
var main = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "main",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.main = main;
var map = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "map",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.map = map;
var mark = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "mark",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.mark = mark;
var menu = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "menu",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.menu = menu;
var meta = function (arg1) { return ({
    tag: "meta",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.meta = meta;
var meter = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "meter",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.meter = meter;
var nav = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "nav",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.nav = nav;
var noscript = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "noscript",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.noscript = noscript;
var object = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "object",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.object = object;
var ol = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "ol",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.ol = ol;
var optgroup = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "optgroup",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.optgroup = optgroup;
var option = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "option",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.option = option;
var output = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "output",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.output = output;
var p = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "p",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.p = p;
var param = function (arg1) { return ({
    tag: "param",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.param = param;
var picture = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "picture",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.picture = picture;
var pre = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "pre",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.pre = pre;
var progress = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "progress",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.progress = progress;
var q = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "q",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.q = q;
var rp = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "rp",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.rp = rp;
var rt = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "rt",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.rt = rt;
var ruby = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "ruby",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.ruby = ruby;
var s = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "s",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.s = s;
var samp = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "samp",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.samp = samp;
var script = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "script",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.script = script;
var section = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "section",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.section = section;
var select = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "select",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.select = select;
var slot = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "slot",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.slot = slot;
var small = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "small",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.small = small;
var source = function (arg1) { return ({
    tag: "source",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.source = source;
var span = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "span",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.span = span;
var strong = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "strong",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.strong = strong;
var sub = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "sub",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.sub = sub;
var summary = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "summary",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.summary = summary;
var sup = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "sup",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.sup = sup;
var table = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "table",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.table = table;
var tbody = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "tbody",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.tbody = tbody;
var td = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "td",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.td = td;
var template = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "template",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.template = template;
var textarea = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "textarea",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.textarea = textarea;
var tfoot = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "tfoot",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.tfoot = tfoot;
var th = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "th",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.th = th;
var thead = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "thead",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.thead = thead;
var time = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "time",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.time = time;
var title = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "title",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.title = title;
var tr = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "tr",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.tr = tr;
var track = function (arg1) { return ({
    tag: "track",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.track = track;
var u = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "u",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.u = u;
var ul = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "ul",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.ul = ul;
var var_ = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "var",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.var_ = var_;
var video = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "video",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.video = video;
var wbr = function (arg1) { return ({
    tag: "wbr",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.wbr = wbr;
var a = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "a",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.a = a;
var animate = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "animate",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.animate = animate;
var animateMotion = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "animateMotion",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.animateMotion = animateMotion;
var animateTransform = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "animateTransform",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.animateTransform = animateTransform;
var circle = function (arg1) { return ({
    tag: "circle",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.circle = circle;
var clipPath = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "clipPath",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.clipPath = clipPath;
var defs = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "defs",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.defs = defs;
var desc = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "desc",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.desc = desc;
var discard = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "discard",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.discard = discard;
var ellipse = function (arg1) { return ({
    tag: "ellipse",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.ellipse = ellipse;
var feBlend = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feBlend",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feBlend = feBlend;
var feColorMatrix = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feColorMatrix",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feColorMatrix = feColorMatrix;
var feComponentTransfer = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feComponentTransfer",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feComponentTransfer = feComponentTransfer;
var feComposite = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feComposite",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feComposite = feComposite;
var feConvolveMatrix = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feConvolveMatrix",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feConvolveMatrix = feConvolveMatrix;
var feDiffuseLighting = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feDiffuseLighting",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feDiffuseLighting = feDiffuseLighting;
var feDisplacementMap = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feDisplacementMap",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feDisplacementMap = feDisplacementMap;
var feDistantLight = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feDistantLight",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feDistantLight = feDistantLight;
var feDropShadow = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feDropShadow",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feDropShadow = feDropShadow;
var feFlood = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feFlood",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feFlood = feFlood;
var feFuncA = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feFuncA",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feFuncA = feFuncA;
var feFuncB = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feFuncB",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feFuncB = feFuncB;
var feFuncG = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feFuncG",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feFuncG = feFuncG;
var feFuncR = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feFuncR",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feFuncR = feFuncR;
var feGaussianBlur = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feGaussianBlur",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feGaussianBlur = feGaussianBlur;
var feImage = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feImage",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feImage = feImage;
var feMerge = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feMerge",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feMerge = feMerge;
var feMergeNode = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feMergeNode",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feMergeNode = feMergeNode;
var feMorphology = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feMorphology",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feMorphology = feMorphology;
var feOffset = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feOffset",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feOffset = feOffset;
var fePointLight = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "fePointLight",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.fePointLight = fePointLight;
var feSpecularLighting = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feSpecularLighting",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feSpecularLighting = feSpecularLighting;
var feSpotLight = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feSpotLight",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feSpotLight = feSpotLight;
var feTile = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feTile",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feTile = feTile;
var feTurbulence = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "feTurbulence",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.feTurbulence = feTurbulence;
var filter = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "filter",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.filter = filter;
var foreignObject = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "foreignObject",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.foreignObject = foreignObject;
var g = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "g",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.g = g;
var image = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "image",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.image = image;
var line = function (arg1) { return ({
    tag: "line",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.line = line;
var linearGradient = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "linearGradient",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.linearGradient = linearGradient;
var marker = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "marker",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.marker = marker;
var mask = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "mask",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.mask = mask;
var metadata = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "metadata",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.metadata = metadata;
var mpath = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "mpath",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.mpath = mpath;
var path = function (arg1) { return ({
    tag: "path",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.path = path;
var pattern = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "pattern",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.pattern = pattern;
var polygon = function (arg1) { return ({
    tag: "polygon",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.polygon = polygon;
var polyline = function (arg1) { return ({
    tag: "polyline",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.polyline = polyline;
var radialGradient = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "radialGradient",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.radialGradient = radialGradient;
var rect = function (arg1) { return ({
    tag: "rect",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.rect = rect;
var set = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "set",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.set = set;
var stop = function (arg1) { return ({
    tag: "stop",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.stop = stop;
var svg = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "svg",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.svg = svg;
var switch_ = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "switch",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.switch_ = switch_;
var symbol = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "symbol",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.symbol = symbol;
var text = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "text",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.text = text;
var textPath = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "textPath",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.textPath = textPath;
var tspan = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "tspan",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.tspan = tspan;
var unknown = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "unknown",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.unknown = unknown;
var use = function (arg1) { return ({
    tag: "use",
    type: "element",
    atts: arg1,
    children: undefined,
}); };
exports.use = use;
var view = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r1, r2, arg1IsChild;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, item];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    r2 = _a.sent();
                    arg1IsChild = (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("tag")) || (r1 === null || r1 === void 0 ? void 0 : r1.hasOwnProperty("html")) || typeof r1 === "string";
                    return [2 /*return*/, {
                            tag: "view",
                            atts: arg1IsChild ? undefined : r1,
                            type: "element",
                            children: r1 ? (arg1IsChild ? [r1].concat(r2) : r2) : r2,
                        }];
            }
        });
    });
};
exports.view = view;
