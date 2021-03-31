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
exports.SlamStyles = exports.buildFiles = exports.CreateSlamServer = void 0;
var tsNode = require("ts-node");
tsNode.register({
    compilerOptions: {
        module: "CommonJS",
        moduleResolution: "node",
        resolveJsonModule: true,
        allowSyntheticDefaultImports: true,
    },
});
__exportStar(require("./elementFunctions"), exports);
var server_1 = require("./server");
Object.defineProperty(exports, "CreateSlamServer", { enumerable: true, get: function () { return server_1.CreateSlamServer; } });
var builders_1 = require("./builders");
Object.defineProperty(exports, "buildFiles", { enumerable: true, get: function () { return builders_1.buildFiles; } });
var cssBuilder_1 = require("./cssBuilder");
Object.defineProperty(exports, "SlamStyles", { enumerable: true, get: function () { return cssBuilder_1.SlamStyles; } });
