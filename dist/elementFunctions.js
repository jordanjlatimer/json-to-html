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
var builders_1 = require("./builders");
function abbr(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "abbr");
}
exports.abbr = abbr;
function address(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "address");
}
exports.address = address;
function area(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "area",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.area = area;
function article(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "article");
}
exports.article = article;
function aside(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "aside");
}
exports.aside = aside;
function audio(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "audio");
}
exports.audio = audio;
function b(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "b");
}
exports.b = b;
function base(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "base",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.base = base;
function bdi(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "bdi");
}
exports.bdi = bdi;
function bdo(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "bdo");
}
exports.bdo = bdo;
function blockquote(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "blockquote");
}
exports.blockquote = blockquote;
function body(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "body");
}
exports.body = body;
function br(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "br",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.br = br;
function button(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "button");
}
exports.button = button;
function canvas(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "canvas");
}
exports.canvas = canvas;
function caption(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "caption");
}
exports.caption = caption;
function cite(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "cite");
}
exports.cite = cite;
function code(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "code");
}
exports.code = code;
function col(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "col",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.col = col;
function colgroup(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "colgroup");
}
exports.colgroup = colgroup;
function data(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "data");
}
exports.data = data;
function datalist(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "datalist");
}
exports.datalist = datalist;
function dd(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "dd");
}
exports.dd = dd;
function del(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "del");
}
exports.del = del;
function details(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "details");
}
exports.details = details;
function dfn(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "dfn");
}
exports.dfn = dfn;
function dialog(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "dialog");
}
exports.dialog = dialog;
function div(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "div");
}
exports.div = div;
function dl(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "dl");
}
exports.dl = dl;
function dt(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "dt");
}
exports.dt = dt;
function em(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "em");
}
exports.em = em;
function embed(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "embed",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.embed = embed;
function fieldset(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "fieldset");
}
exports.fieldset = fieldset;
function figcaption(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "figcaption");
}
exports.figcaption = figcaption;
function figure(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "figure");
}
exports.figure = figure;
function footer(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "footer");
}
exports.footer = footer;
function form(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "form");
}
exports.form = form;
function h1(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "h1");
}
exports.h1 = h1;
function h2(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "h2");
}
exports.h2 = h2;
function h3(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "h3");
}
exports.h3 = h3;
function h4(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "h4");
}
exports.h4 = h4;
function h5(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "h5");
}
exports.h5 = h5;
function h6(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "h6");
}
exports.h6 = h6;
function head(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "head");
}
exports.head = head;
function header(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "header");
}
exports.header = header;
function hgroup(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "hgroup");
}
exports.hgroup = hgroup;
function hr(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "hr",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.hr = hr;
function html(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "html");
}
exports.html = html;
function i(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "i");
}
exports.i = i;
function iframe(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "iframe");
}
exports.iframe = iframe;
function img(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "img",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.img = img;
function input(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "input",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.input = input;
function ins(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "ins");
}
exports.ins = ins;
function kbd(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "kbd");
}
exports.kbd = kbd;
function label(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "label");
}
exports.label = label;
function legend(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "legend");
}
exports.legend = legend;
function li(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "li");
}
exports.li = li;
function link(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "link",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.link = link;
function main(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "main");
}
exports.main = main;
function map(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "map");
}
exports.map = map;
function mark(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "mark");
}
exports.mark = mark;
function menu(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "menu");
}
exports.menu = menu;
function meta(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "meta",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.meta = meta;
function meter(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "meter");
}
exports.meter = meter;
function nav(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "nav");
}
exports.nav = nav;
function noscript(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "noscript");
}
exports.noscript = noscript;
function object(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "object");
}
exports.object = object;
function ol(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "ol");
}
exports.ol = ol;
function optgroup(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "optgroup");
}
exports.optgroup = optgroup;
function option(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "option");
}
exports.option = option;
function output(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "output");
}
exports.output = output;
function p(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "p");
}
exports.p = p;
function param(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "param",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.param = param;
function picture(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "picture");
}
exports.picture = picture;
function pre(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "pre");
}
exports.pre = pre;
function progress(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "progress");
}
exports.progress = progress;
function q(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "q");
}
exports.q = q;
function rp(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "rp");
}
exports.rp = rp;
function rt(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "rt");
}
exports.rt = rt;
function ruby(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "ruby");
}
exports.ruby = ruby;
function s(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "s");
}
exports.s = s;
function samp(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "samp");
}
exports.samp = samp;
function script(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "script");
}
exports.script = script;
function section(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "section");
}
exports.section = section;
function select(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "select");
}
exports.select = select;
function slot(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "slot");
}
exports.slot = slot;
function small(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "small");
}
exports.small = small;
function source(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "source",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.source = source;
function span(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "span");
}
exports.span = span;
function strong(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "strong");
}
exports.strong = strong;
function sub(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "sub");
}
exports.sub = sub;
function summary(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "summary");
}
exports.summary = summary;
function sup(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "sup");
}
exports.sup = sup;
function table(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "table");
}
exports.table = table;
function tbody(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "tbody");
}
exports.tbody = tbody;
function td(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "td");
}
exports.td = td;
function template(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "template");
}
exports.template = template;
function textarea(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "textarea");
}
exports.textarea = textarea;
function tfoot(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "tfoot");
}
exports.tfoot = tfoot;
function th(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "th");
}
exports.th = th;
function thead(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "thead");
}
exports.thead = thead;
function time(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "time");
}
exports.time = time;
function title(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "title");
}
exports.title = title;
function tr(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "tr");
}
exports.tr = tr;
function track(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "track",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.track = track;
function u(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "u");
}
exports.u = u;
function ul(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "ul");
}
exports.ul = ul;
function var_(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "var");
}
exports.var_ = var_;
function video(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "video");
}
exports.video = video;
function wbr(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "wbr",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.wbr = wbr;
function a(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "a");
}
exports.a = a;
function animate(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "animate");
}
exports.animate = animate;
function animateMotion(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "animateMotion");
}
exports.animateMotion = animateMotion;
function animateTransform(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "animateTransform");
}
exports.animateTransform = animateTransform;
function circle(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "circle",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.circle = circle;
function clipPath(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "clipPath");
}
exports.clipPath = clipPath;
function defs(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "defs");
}
exports.defs = defs;
function desc(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "desc");
}
exports.desc = desc;
function discard(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "discard");
}
exports.discard = discard;
function ellipse(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "ellipse",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.ellipse = ellipse;
function feBlend(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feBlend");
}
exports.feBlend = feBlend;
function feColorMatrix(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feColorMatrix");
}
exports.feColorMatrix = feColorMatrix;
function feComponentTransfer(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feComponentTransfer");
}
exports.feComponentTransfer = feComponentTransfer;
function feComposite(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feComposite");
}
exports.feComposite = feComposite;
function feConvolveMatrix(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feConvolveMatrix");
}
exports.feConvolveMatrix = feConvolveMatrix;
function feDiffuseLighting(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feDiffuseLighting");
}
exports.feDiffuseLighting = feDiffuseLighting;
function feDisplacementMap(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feDisplacementMap");
}
exports.feDisplacementMap = feDisplacementMap;
function feDistantLight(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feDistantLight");
}
exports.feDistantLight = feDistantLight;
function feDropShadow(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feDropShadow");
}
exports.feDropShadow = feDropShadow;
function feFlood(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feFlood");
}
exports.feFlood = feFlood;
function feFuncA(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feFuncA");
}
exports.feFuncA = feFuncA;
function feFuncB(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feFuncB");
}
exports.feFuncB = feFuncB;
function feFuncG(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feFuncG");
}
exports.feFuncG = feFuncG;
function feFuncR(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feFuncR");
}
exports.feFuncR = feFuncR;
function feGaussianBlur(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feGaussianBlur");
}
exports.feGaussianBlur = feGaussianBlur;
function feImage(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feImage");
}
exports.feImage = feImage;
function feMerge(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feMerge");
}
exports.feMerge = feMerge;
function feMergeNode(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feMergeNode");
}
exports.feMergeNode = feMergeNode;
function feMorphology(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feMorphology");
}
exports.feMorphology = feMorphology;
function feOffset(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feOffset");
}
exports.feOffset = feOffset;
function fePointLight(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "fePointLight");
}
exports.fePointLight = fePointLight;
function feSpecularLighting(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feSpecularLighting");
}
exports.feSpecularLighting = feSpecularLighting;
function feSpotLight(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feSpotLight");
}
exports.feSpotLight = feSpotLight;
function feTile(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feTile");
}
exports.feTile = feTile;
function feTurbulence(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "feTurbulence");
}
exports.feTurbulence = feTurbulence;
function filter(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "filter");
}
exports.filter = filter;
function foreignObject(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "foreignObject");
}
exports.foreignObject = foreignObject;
function g(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "g");
}
exports.g = g;
function image(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "image");
}
exports.image = image;
function line(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "line",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.line = line;
function linearGradient(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "linearGradient");
}
exports.linearGradient = linearGradient;
function marker(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "marker");
}
exports.marker = marker;
function mask(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "mask");
}
exports.mask = mask;
function metadata(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "metadata");
}
exports.metadata = metadata;
function mpath(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "mpath");
}
exports.mpath = mpath;
function path(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "path",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.path = path;
function pattern(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "pattern");
}
exports.pattern = pattern;
function polygon(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "polygon",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.polygon = polygon;
function polyline(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "polyline",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.polyline = polyline;
function radialGradient(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "radialGradient");
}
exports.radialGradient = radialGradient;
function rect(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "rect",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.rect = rect;
function set(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "set");
}
exports.set = set;
function stop(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "stop",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.stop = stop;
function svg(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "svg");
}
exports.svg = svg;
function switch_(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "switch");
}
exports.switch_ = switch_;
function symbol(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "symbol");
}
exports.symbol = symbol;
function text(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "text");
}
exports.text = text;
function textPath(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "textPath");
}
exports.textPath = textPath;
function tspan(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "tspan");
}
exports.tspan = tspan;
function unknown(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "unknown");
}
exports.unknown = unknown;
function use(arg1) {
    var css = arg1 ? arg1["css"] : undefined;
    var js = arg1 ? arg1["js"] : undefined;
    return {
        type: "element",
        tag: "use",
        atts: __assign(__assign({}, arg1), { css: css, js: js }),
        children: undefined,
    };
}
exports.use = use;
function view(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    var atts = undefined;
    return builders_1.buildSlamElementObject(arg1, arg2, atts, "view");
}
exports.view = view;
