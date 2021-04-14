"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPageJsString = void 0;
function buildPageJsString(components) {
    var build = "";
    Object.keys(components).forEach(function (key) {
        var _a;
        var js = (_a = components[parseInt(key)][0].atts) === null || _a === void 0 ? void 0 : _a.js;
        build += js ? "(" + js + ")();\n" : "";
    });
    return build;
}
exports.buildPageJsString = buildPageJsString;
