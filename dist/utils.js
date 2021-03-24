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
exports.resolveAndType = exports.equalObjects = exports.parseAtts = exports.noChildren = exports.toKebabCase = void 0;
var toKebabCase = function (value) {
    return value.split("").reduce(function (a, b) { return a + (/[A-Z]/.test(b) ? "-" + b.toLowerCase() : b); }, "");
};
exports.toKebabCase = toKebabCase;
var presentAtt = function (attName) {
    var atts = [
        "allowfullscreen",
        "allowpaymentrequest",
        "async",
        "autofocus",
        "autoplay",
        "checked",
        "controls",
        "default",
        "defer",
        "disabled",
        "formnovalidate",
        "hidden",
        "ismap",
        "loop",
        "multiple",
        "muted",
        "novalidate",
        "open",
        "readonly",
        "required",
        "reversed",
        "selected",
        "typemustmatch",
    ];
    return atts.includes(attName);
};
function noChildren(tag) {
    var noChildren = [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr",
        "circle",
        "ellipse",
        "line",
        "path",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "use",
    ];
    return noChildren.includes(tag);
}
exports.noChildren = noChildren;
function parseAtts(atts) {
    var attsText = "";
    Object.keys(atts).forEach(function (att) {
        if (presentAtt(att.toString())) {
            attsText += " " + att;
        }
        else if (att !== "js" && att !== "css") {
            attsText += " " + att + '="' + atts[att] + '"';
        }
    });
    return attsText;
}
exports.parseAtts = parseAtts;
function equalObjects(object1, object2) {
    if (typeof object1 !== "object") {
        throw "Parameter 1 is not an object.";
    }
    if (typeof object2 !== "object") {
        throw "Parameter 2 is not an object.";
    }
    var object1Keys = Object.keys(object1);
    var object2Keys = Object.keys(object2);
    if (object1Keys.length !== object2Keys.length) {
        return false;
    }
    for (var _i = 0, object1Keys_1 = object1Keys; _i < object1Keys_1.length; _i++) {
        var key = object1Keys_1[_i];
        if (typeof object1[key] === "object") {
            if (!equalObjects(object1[key], object2[key])) {
                return false;
            }
        }
        else if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
}
exports.equalObjects = equalObjects;
function resolveAndType(arg1, arg2, atts, tag) {
    return __awaiter(this, void 0, void 0, function () {
        var children, r1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    children = [];
                    if (!arg1) return [3 /*break*/, 2];
                    return [4 /*yield*/, arg1];
                case 1:
                    r1 = _a.sent();
                    if (typeof r1 === "string") {
                        children.push(r1);
                    }
                    else if ("type" in r1) {
                        children.push(r1);
                    }
                    else {
                        atts = r1;
                    }
                    _a.label = 2;
                case 2:
                    children = children.concat(arg2);
                    return [2 /*return*/, {
                            type: "element",
                            tag: tag,
                            atts: atts,
                            children: children.length > 0 ? children : undefined,
                        }];
            }
        });
    });
}
exports.resolveAndType = resolveAndType;
