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
exports.Slam = void 0;
var tsNode = require("ts-node");
tsNode.register({
    compilerOptions: {
        module: "CommonJS",
        moduleResolution: "node",
        resolveJsonModule: true,
        allowSyntheticDefaultImports: true,
    },
    transpileOnly: true,
});
__exportStar(require("./elementFunctions"), exports);
var slam_1 = require("./slam");
Object.defineProperty(exports, "Slam", { enumerable: true, get: function () { return slam_1.Slam; } });
