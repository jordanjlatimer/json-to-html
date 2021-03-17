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
exports.CreateElement = exports.CreateComponent = exports.CreatePage = void 0;
var generateCss_1 = require("./generateCss");
var builders_1 = require("./builders");
var fs = require("fs");
function CreatePage(config) {
    var components = {};
    var page = {
        html: "<!DOCTYPE html>",
        css: "",
        js: "",
        buildAll: function () {
            buildCss();
            buildJs();
            buildHtml();
            page.html = page.html.replace("</head>", "<link rel=stylesheet href=\"./" + config.name + ".css\"/></head>\n");
            page.html = page.html.replace("</body>", "<script src=\"./" + config.name + ".js\"></script></body>\n");
        },
        writeFiles: function (paths) {
            fs.writeFileSync((paths === null || paths === void 0 ? void 0 : paths.htmlPath) ? paths.htmlPath : "./" + config.name + ".html", page.html);
            fs.writeFileSync((paths === null || paths === void 0 ? void 0 : paths.cssPath) ? paths.cssPath : "./" + config.name + ".css", page.css);
            fs.writeFileSync((paths === null || paths === void 0 ? void 0 : paths.jsPath) ? paths.jsPath : "./" + config.name + ".js", page.js);
        },
    };
    var buildHtml = function () {
        page.html = config.html ? builders_1.buildHtmlFromObject(config.html, components) : "";
    };
    var buildCss = function () {
        components = config.html ? builders_1.identifyComponents(config.html) : {};
        page.css = config.css ? generateCss_1.buildCssFromObject("html", config.css) : "";
        Object.keys(components).forEach(function (key) {
            var css = components[parseInt(key)][0].css;
            page.css += css ? generateCss_1.buildCssFromObject(".c" + key, css) : "";
        });
    };
    var buildJs = function () {
        page.js = page.js ? "(" + page.js + ")()" : "";
        Object.keys(components).forEach(function (key) {
            var js = components[parseInt(key)][0].js;
            page.js += js ? "(" + js + ")()" : "";
        });
    };
    return page;
}
exports.CreatePage = CreatePage;
function CreateComponent(arg1) {
    if (typeof arg1 === "function") {
        return function (props) { return (__assign({ type: "component" }, arg1(props))); };
    }
    else {
        return __assign({ type: "component" }, arg1);
    }
}
exports.CreateComponent = CreateComponent;
function CreateElement(arg1) {
    if (typeof arg1 === "function") {
        return function (props) { return (__assign({ type: "element" }, arg1(props))); };
    }
    else {
        return __assign({ type: "element" }, arg1);
    }
}
exports.CreateElement = CreateElement;
