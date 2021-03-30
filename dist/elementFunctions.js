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
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "abbr");
};
exports.abbr = abbr;
var address = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "address");
};
exports.address = address;
var area = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "area",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.area = area;
var article = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "article");
};
exports.article = article;
var aside = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "aside");
};
exports.aside = aside;
var audio = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "audio");
};
exports.audio = audio;
var b = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "b");
};
exports.b = b;
var base = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "base",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.base = base;
var bdi = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "bdi");
};
exports.bdi = bdi;
var bdo = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "bdo");
};
exports.bdo = bdo;
var blockquote = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "blockquote");
};
exports.blockquote = blockquote;
var body = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "body");
};
exports.body = body;
var br = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "br",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.br = br;
var button = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "button");
};
exports.button = button;
var canvas = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "canvas");
};
exports.canvas = canvas;
var caption = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "caption");
};
exports.caption = caption;
var cite = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "cite");
};
exports.cite = cite;
var code = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "code");
};
exports.code = code;
var col = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "col",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.col = col;
var colgroup = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "colgroup");
};
exports.colgroup = colgroup;
var data = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "data");
};
exports.data = data;
var datalist = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "datalist");
};
exports.datalist = datalist;
var dd = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "dd");
};
exports.dd = dd;
var del = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "del");
};
exports.del = del;
var details = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "details");
};
exports.details = details;
var dfn = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "dfn");
};
exports.dfn = dfn;
var dialog = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "dialog");
};
exports.dialog = dialog;
var div = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "div");
};
exports.div = div;
var dl = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "dl");
};
exports.dl = dl;
var dt = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "dt");
};
exports.dt = dt;
var em = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "em");
};
exports.em = em;
var embed = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "embed",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.embed = embed;
var fieldset = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "fieldset");
};
exports.fieldset = fieldset;
var figcaption = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "figcaption");
};
exports.figcaption = figcaption;
var figure = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "figure");
};
exports.figure = figure;
var footer = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "footer");
};
exports.footer = footer;
var form = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "form");
};
exports.form = form;
var h1 = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "h1");
};
exports.h1 = h1;
var h2 = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "h2");
};
exports.h2 = h2;
var h3 = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "h3");
};
exports.h3 = h3;
var h4 = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "h4");
};
exports.h4 = h4;
var h5 = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "h5");
};
exports.h5 = h5;
var h6 = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "h6");
};
exports.h6 = h6;
var head = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "head");
};
exports.head = head;
var header = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "header");
};
exports.header = header;
var hgroup = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "hgroup");
};
exports.hgroup = hgroup;
var hr = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "hr",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.hr = hr;
var html = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "html");
};
exports.html = html;
var i = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "i");
};
exports.i = i;
var iframe = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "iframe");
};
exports.iframe = iframe;
var img = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "img",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
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
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.input = input;
var ins = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "ins");
};
exports.ins = ins;
var kbd = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "kbd");
};
exports.kbd = kbd;
var label = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "label");
};
exports.label = label;
var legend = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "legend");
};
exports.legend = legend;
var li = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "li");
};
exports.li = li;
var link = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "link",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.link = link;
var main = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "main");
};
exports.main = main;
var map = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "map");
};
exports.map = map;
var mark = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "mark");
};
exports.mark = mark;
var menu = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "menu");
};
exports.menu = menu;
var meta = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "meta",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.meta = meta;
var meter = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "meter");
};
exports.meter = meter;
var nav = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "nav");
};
exports.nav = nav;
var noscript = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "noscript");
};
exports.noscript = noscript;
var object = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "object");
};
exports.object = object;
var ol = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "ol");
};
exports.ol = ol;
var optgroup = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "optgroup");
};
exports.optgroup = optgroup;
var option = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "option");
};
exports.option = option;
var output = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "output");
};
exports.output = output;
var p = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "p");
};
exports.p = p;
var param = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "param",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.param = param;
var picture = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "picture");
};
exports.picture = picture;
var pre = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "pre");
};
exports.pre = pre;
var progress = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "progress");
};
exports.progress = progress;
var q = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "q");
};
exports.q = q;
var rp = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "rp");
};
exports.rp = rp;
var rt = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "rt");
};
exports.rt = rt;
var ruby = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "ruby");
};
exports.ruby = ruby;
var s = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "s");
};
exports.s = s;
var samp = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "samp");
};
exports.samp = samp;
var script = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "script");
};
exports.script = script;
var section = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "section");
};
exports.section = section;
var select = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "select");
};
exports.select = select;
var slot = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "slot");
};
exports.slot = slot;
var small = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "small");
};
exports.small = small;
var source = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "source",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.source = source;
var span = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "span");
};
exports.span = span;
var strong = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "strong");
};
exports.strong = strong;
var sub = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "sub");
};
exports.sub = sub;
var summary = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "summary");
};
exports.summary = summary;
var sup = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "sup");
};
exports.sup = sup;
var table = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "table");
};
exports.table = table;
var tbody = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "tbody");
};
exports.tbody = tbody;
var td = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "td");
};
exports.td = td;
var template = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "template");
};
exports.template = template;
var textarea = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "textarea");
};
exports.textarea = textarea;
var tfoot = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "tfoot");
};
exports.tfoot = tfoot;
var th = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "th");
};
exports.th = th;
var thead = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "thead");
};
exports.thead = thead;
var time = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "time");
};
exports.time = time;
var title = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "title");
};
exports.title = title;
var tr = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "tr");
};
exports.tr = tr;
var track = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "track",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.track = track;
var u = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "u");
};
exports.u = u;
var ul = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "ul");
};
exports.ul = ul;
var var_ = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "var");
};
exports.var_ = var_;
var video = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "video");
};
exports.video = video;
var wbr = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "wbr",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.wbr = wbr;
var a = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "a");
};
exports.a = a;
var animate = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "animate");
};
exports.animate = animate;
var animateMotion = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "animateMotion");
};
exports.animateMotion = animateMotion;
var animateTransform = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "animateTransform");
};
exports.animateTransform = animateTransform;
var circle = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "circle",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.circle = circle;
var clipPath = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "clipPath");
};
exports.clipPath = clipPath;
var defs = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "defs");
};
exports.defs = defs;
var desc = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "desc");
};
exports.desc = desc;
var discard = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "discard");
};
exports.discard = discard;
var ellipse = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "ellipse",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.ellipse = ellipse;
var feBlend = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feBlend");
};
exports.feBlend = feBlend;
var feColorMatrix = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feColorMatrix");
};
exports.feColorMatrix = feColorMatrix;
var feComponentTransfer = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feComponentTransfer");
};
exports.feComponentTransfer = feComponentTransfer;
var feComposite = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feComposite");
};
exports.feComposite = feComposite;
var feConvolveMatrix = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feConvolveMatrix");
};
exports.feConvolveMatrix = feConvolveMatrix;
var feDiffuseLighting = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feDiffuseLighting");
};
exports.feDiffuseLighting = feDiffuseLighting;
var feDisplacementMap = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feDisplacementMap");
};
exports.feDisplacementMap = feDisplacementMap;
var feDistantLight = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feDistantLight");
};
exports.feDistantLight = feDistantLight;
var feDropShadow = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feDropShadow");
};
exports.feDropShadow = feDropShadow;
var feFlood = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feFlood");
};
exports.feFlood = feFlood;
var feFuncA = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feFuncA");
};
exports.feFuncA = feFuncA;
var feFuncB = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feFuncB");
};
exports.feFuncB = feFuncB;
var feFuncG = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feFuncG");
};
exports.feFuncG = feFuncG;
var feFuncR = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feFuncR");
};
exports.feFuncR = feFuncR;
var feGaussianBlur = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feGaussianBlur");
};
exports.feGaussianBlur = feGaussianBlur;
var feImage = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feImage");
};
exports.feImage = feImage;
var feMerge = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feMerge");
};
exports.feMerge = feMerge;
var feMergeNode = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feMergeNode");
};
exports.feMergeNode = feMergeNode;
var feMorphology = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feMorphology");
};
exports.feMorphology = feMorphology;
var feOffset = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feOffset");
};
exports.feOffset = feOffset;
var fePointLight = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "fePointLight");
};
exports.fePointLight = fePointLight;
var feSpecularLighting = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feSpecularLighting");
};
exports.feSpecularLighting = feSpecularLighting;
var feSpotLight = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feSpotLight");
};
exports.feSpotLight = feSpotLight;
var feTile = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feTile");
};
exports.feTile = feTile;
var feTurbulence = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "feTurbulence");
};
exports.feTurbulence = feTurbulence;
var filter = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "filter");
};
exports.filter = filter;
var foreignObject = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "foreignObject");
};
exports.foreignObject = foreignObject;
var g = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "g");
};
exports.g = g;
var image = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "image");
};
exports.image = image;
var line = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "line",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.line = line;
var linearGradient = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "linearGradient");
};
exports.linearGradient = linearGradient;
var marker = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "marker");
};
exports.marker = marker;
var mask = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "mask");
};
exports.mask = mask;
var metadata = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "metadata");
};
exports.metadata = metadata;
var mpath = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "mpath");
};
exports.mpath = mpath;
var path = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "path",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.path = path;
var pattern = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "pattern");
};
exports.pattern = pattern;
var polygon = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "polygon",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
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
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.polyline = polyline;
var radialGradient = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "radialGradient");
};
exports.radialGradient = radialGradient;
var rect = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "rect",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.rect = rect;
var set = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "set");
};
exports.set = set;
var stop = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "stop",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.stop = stop;
var svg = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "svg");
};
exports.svg = svg;
var switch_ = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "switch");
};
exports.switch_ = switch_;
var symbol = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "symbol");
};
exports.symbol = symbol;
var text = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "text");
};
exports.text = text;
var textPath = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "textPath");
};
exports.textPath = textPath;
var tspan = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "tspan");
};
exports.tspan = tspan;
var unknown = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "unknown");
};
exports.unknown = unknown;
var use = function (arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "use",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
};
exports.use = use;
var view = function (arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return utils_1.typeTag(arg1, arg2, atts, "view");
};
exports.view = view;
