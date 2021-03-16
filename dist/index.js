"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateElement = exports.CreateComponent = exports.CreatePage = void 0;
__exportStar(require("./elementFunctions"), exports);
var page_1 = require("./page");
Object.defineProperty(exports, "CreatePage", { enumerable: true, get: function () { return page_1.CreatePage; } });
Object.defineProperty(exports, "CreateComponent", { enumerable: true, get: function () { return page_1.CreateComponent; } });
Object.defineProperty(exports, "CreateElement", { enumerable: true, get: function () { return page_1.CreateElement; } });
