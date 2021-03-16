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
function CreatePage(name) {
    var page = {
        get type() {
            return "page";
        },
        name: name,
        html: undefined,
        css: undefined,
        js: undefined,
        components: {},
        finalBuild: {
            html: "<!DOCTYPE html>",
            css: "",
            js: "",
        },
        buildHtml: function () {
            page.finalBuild.html += page.html ? builders_1.buildHtmlFromObject(page.html, page.components) : "";
            console.log("HTML Built!");
        },
        buildCss: function () {
            page.components = page.html ? builders_1.identifyComponents(page.html) : {};
            page.finalBuild.css = page.css ? generateCss_1.buildCssFromObject("html", page.css) : "";
            Object.keys(page.components).forEach(function (key) {
                var css = page.components[parseInt(key)][0].css;
                page.finalBuild.css += css ? generateCss_1.buildCssFromObject(".c" + key, css) : "";
            });
            console.log("CSS Built!");
        },
        buildJs: function () {
            page.finalBuild.js = page.js ? "(" + page.js + ")()" : "";
            Object.keys(page.components).forEach(function (key) {
                var js = page.components[parseInt(key)][0].js;
                page.finalBuild.js += js ? "(" + js + ")()" : "";
            });
            console.log("JS Built!");
        },
        buildAll: function () {
            console.log("Building page " + page.name + "...");
            page.buildCss();
            page.buildJs();
            page.buildHtml();
            page.finalBuild.html = page.finalBuild.html.replace("</head>", "<link rel=stylesheet href=\"./" + page.name + ".css\"/></head>\n");
            page.finalBuild.html = page.finalBuild.html.replace("</body>", "<script src=\"./" + page.name + ".js\"></script></body>\n");
            console.log("Page " + page.name + " built successfully!");
        },
        writeFiles: function (paths) {
            console.log("Writing files...");
            fs.writeFileSync((paths === null || paths === void 0 ? void 0 : paths.htmlPath) ? paths.htmlPath : "./" + page.name + ".html", page.finalBuild.html);
            fs.writeFileSync((paths === null || paths === void 0 ? void 0 : paths.cssPath) ? paths.cssPath : "./" + page.name + ".css", page.finalBuild.css);
            fs.writeFileSync((paths === null || paths === void 0 ? void 0 : paths.jsPath) ? paths.jsPath : "./" + page.name + ".js", page.finalBuild.js);
            console.log("Files written!");
        },
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
