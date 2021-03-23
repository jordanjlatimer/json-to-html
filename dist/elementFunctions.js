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
exports.iframe = exports.i = exports.html = exports.hr = exports.hgroup = exports.header = exports.head = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.form = exports.footer = exports.figure = exports.figcaption = exports.fieldset = exports.embed = exports.em = exports.dt = exports.dl = exports.div = exports.dialog = exports.dfn = exports.details = exports.del = exports.dd = exports.datalist = exports.data = exports.colgroup = exports.col = exports.code = exports.cite = exports.caption = exports.canvas = exports.button = exports.br = exports.body = exports.blockquote = exports.bdo = exports.bdi = exports.base = exports.b = exports.audio = exports.aside = exports.article = exports.area = exports.address = exports.abbr = void 0;
exports.th = exports.tfoot = exports.textarea = exports.template = exports.td = exports.tbody = exports.table = exports.sup = exports.summary = exports.sub = exports.strong = exports.span = exports.source = exports.small = exports.slot = exports.select = exports.section = exports.script = exports.samp = exports.s = exports.ruby = exports.rt = exports.rp = exports.q = exports.progress = exports.pre = exports.picture = exports.param = exports.p = exports.output = exports.option = exports.optgroup = exports.ol = exports.object = exports.noscript = exports.nav = exports.meter = exports.meta = exports.menu = exports.mark = exports.map = exports.main = exports.link = exports.li = exports.legend = exports.label = exports.kbd = exports.ins = exports.input = exports.img = void 0;
exports.line = exports.image = exports.g = exports.foreignObject = exports.filter = exports.feTurbulence = exports.feTile = exports.feSpotLight = exports.feSpecularLighting = exports.fePointLight = exports.feOffset = exports.feMorphology = exports.feMergeNode = exports.feMerge = exports.feImage = exports.feGaussianBlur = exports.feFuncR = exports.feFuncG = exports.feFuncB = exports.feFuncA = exports.feFlood = exports.feDropShadow = exports.feDistantLight = exports.feDisplacementMap = exports.feDiffuseLighting = exports.feConvolveMatrix = exports.feComposite = exports.feComponentTransfer = exports.feColorMatrix = exports.feBlend = exports.ellipse = exports.discard = exports.desc = exports.defs = exports.clipPath = exports.circle = exports.animateTransform = exports.animateMotion = exports.animate = exports.a = exports.wbr = exports.video = exports.var_ = exports.ul = exports.u = exports.track = exports.tr = exports.title = exports.time = exports.thead = void 0;
exports.view = exports.use = exports.unknown = exports.tspan = exports.textPath = exports.text = exports.symbol = exports.switch_ = exports.svg = exports.stop = exports.set = exports.rect = exports.radialGradient = exports.polyline = exports.polygon = exports.pattern = exports.path = exports.mpath = exports.metadata = exports.mask = exports.marker = exports.linearGradient = void 0;
var utils_1 = require("./utils");
var abbr = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "abbr")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "address")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.address = address;
var area = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "area",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.area = area;
var article = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "article")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "aside")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "audio")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "b")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.b = b;
var base = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "base",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.base = base;
var bdi = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "bdi")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "bdo")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "blockquote")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "body")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.body = body;
var br = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "br",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.br = br;
var button = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "button")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "canvas")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "caption")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "cite")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "code")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.code = code;
var col = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "col",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.col = col;
var colgroup = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "colgroup")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "data")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "datalist")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "dd")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "del")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "details")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "dfn")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "dialog")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "div")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "dl")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "dt")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "em")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.em = em;
var embed = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "embed",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.embed = embed;
var fieldset = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "fieldset")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "figcaption")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "figure")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "footer")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "form")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "h1")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "h2")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "h3")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "h4")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "h5")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "h6")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "head")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "header")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "hgroup")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.hgroup = hgroup;
var hr = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "hr",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.hr = hr;
var html = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "html")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "i")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "iframe")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.iframe = iframe;
var img = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "img",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.img = img;
var input = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "input",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.input = input;
var ins = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "ins")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "kbd")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "label")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "legend")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "li")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.li = li;
var link = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "link",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.link = link;
var main = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "main")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "map")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "mark")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "menu")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.menu = menu;
var meta = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "meta",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.meta = meta;
var meter = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "meter")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "nav")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "noscript")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "object")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "ol")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "optgroup")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "option")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "output")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "p")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.p = p;
var param = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "param",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.param = param;
var picture = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "picture")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "pre")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "progress")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "q")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "rp")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "rt")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "ruby")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "s")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "samp")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "script")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "section")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "select")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "slot")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "small")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.small = small;
var source = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "source",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.source = source;
var span = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "span")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "strong")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "sub")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "summary")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "sup")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "table")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "tbody")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "td")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "template")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "textarea")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "tfoot")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "th")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "thead")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "time")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "title")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "tr")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.tr = tr;
var track = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "track",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.track = track;
var u = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "u")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "ul")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "var")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "video")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.video = video;
var wbr = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "wbr",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.wbr = wbr;
var a = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "a")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "animate")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "animateMotion")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "animateTransform")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.animateTransform = animateTransform;
var circle = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "circle",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.circle = circle;
var clipPath = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "clipPath")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "defs")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "desc")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "discard")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.discard = discard;
var ellipse = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "ellipse",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.ellipse = ellipse;
var feBlend = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feBlend")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feColorMatrix")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feComponentTransfer")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feComposite")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feConvolveMatrix")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feDiffuseLighting")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feDisplacementMap")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feDistantLight")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feDropShadow")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feFlood")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feFuncA")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feFuncB")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feFuncG")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feFuncR")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feGaussianBlur")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feImage")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feMerge")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feMergeNode")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feMorphology")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feOffset")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "fePointLight")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feSpecularLighting")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feSpotLight")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feTile")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "feTurbulence")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "filter")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "foreignObject")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "g")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "image")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.image = image;
var line = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "line",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.line = line;
var linearGradient = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "linearGradient")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "marker")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "mask")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "metadata")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "mpath")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.mpath = mpath;
var path = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "path",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.path = path;
var pattern = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "pattern")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.pattern = pattern;
var polygon = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "polygon",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.polygon = polygon;
var polyline = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "polyline",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.polyline = polyline;
var radialGradient = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "radialGradient")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.radialGradient = radialGradient;
var rect = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "rect",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.rect = rect;
var set = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "set")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.set = set;
var stop = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "stop",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.stop = stop;
var svg = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "svg")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "switch")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "symbol")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "text")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "textPath")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "tspan")];
                case 2: return [2 /*return*/, _a.sent()];
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
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "unknown")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.unknown = unknown;
var use = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "use",
        atts: __assign(__assign({}, arg1), { css: undefined, js: undefined }),
        children: undefined,
    };
};
exports.use = use;
var view = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var r2, atts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(arg2.map(function (item) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, item];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    r2 = _a.sent();
                    atts = undefined;
                    return [4 /*yield*/, utils_1.resolveAndType(arg1, r2, atts, "view")];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.view = view;
