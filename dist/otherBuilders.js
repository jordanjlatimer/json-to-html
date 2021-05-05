"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildReloadScript = exports.buildPage = exports.buildPageRoutes = exports.buildSlamElement = void 0;
var cssBuilders_1 = require("./cssBuilders");
var htmlBuilders_1 = require("./htmlBuilders");
var jsBuilders_1 = require("./jsBuilders");
var utils_1 = require("./utils");
function buildSlamElement(tag, arg1, arg2) {
    var atts = {};
    var children = [];
    if (arg1) {
        if (typeof arg1 === "string") {
            children.push(arg1);
        }
        else if ("type" in arg1) {
            children.push(arg1);
        }
        else if (Array.isArray(arg1)) {
            children = children.concat(arg1);
        }
        else {
            atts = arg1;
        }
    }
    if (arg2) {
        arg2.forEach(function (child) {
            if (Array.isArray(child)) {
                children = children.concat(child);
            }
            else {
                children.push(child);
            }
        });
    }
    return {
        type: "element",
        tag: tag,
        atts: atts,
        children: children,
    };
}
exports.buildSlamElement = buildSlamElement;
function buildPageRoutes(tree, path, parentKey) {
    var routes = [];
    Object.keys(tree).forEach(function (key) {
        var child = tree[key];
        var htmlPaths = [path + key, path + key + ".html"];
        key === "index" && htmlPaths.push(path);
        var resetPath = "reset.css";
        var slashes = __spreadArray([], __read(path.matchAll(/\//g)));
        slashes === null || slashes === void 0 ? void 0 : slashes.forEach(function (occurance, i) {
            if (i === 0) {
                resetPath = "./" + resetPath;
            }
            else if (i === 1) {
                resetPath = "." + resetPath;
            }
            else {
                resetPath = "../" + resetPath;
            }
        });
        var passKey = parentKey === "" ? key : parentKey + "." + key;
        if (child["content"]) {
            routes.push({
                key: passKey,
                serverPaths: {
                    html: htmlPaths,
                    css: path + key + ".css",
                    js: path + key + ".js",
                },
                clientPaths: {
                    css: "./" + key + ".css",
                    js: "./" + key + ".css",
                    reset: resetPath,
                },
                page: child,
            });
        }
        else {
            routes = __spreadArray(__spreadArray([], __read(routes)), __read(buildPageRoutes(child, path + key + "/", passKey)));
        }
    });
    return routes;
}
exports.buildPageRoutes = buildPageRoutes;
function buildPage(route, content) {
    var page = route.page;
    var finalPage = page.content.consumer(content);
    var components = utils_1.determineSimilarElementsByCss(utils_1.collectElementsWithCss(finalPage));
    var build = {
        html: htmlBuilders_1.buildHtml(finalPage, components),
        css: cssBuilders_1.buildPageCss(components, page.globalStyles),
        js: jsBuilders_1.buildJs(components),
    };
    build.html = page.cssReset
        ? build.html.replace("</head>", "<link rel=stylesheet href=\"" + route.clientPaths.reset + "\"/></head>\n")
        : build.html;
    build.html = build.html.replace("</head>", "<link rel=stylesheet href=\"" + route.clientPaths.css + "\"/></head>\n");
    build.html = build.html.replace("</body>", "<script src=\"" + route.clientPaths.js + "\"></script></body>\n");
    return build;
}
exports.buildPage = buildPage;
function buildReloadScript(port) {
    return "\n<script>\nlet lastUpdate = undefined;\nwindow.setInterval(() => {\n  fetch(\"http://localhost:" + port + "/slamserver/last-update\")\n  .then(response => response.json())\n  .then(json => {\n    if (lastUpdate) {\n      if (lastUpdate < new Date(parseInt(json))) {\n        console.log(\"Changes detected. Refreshing page...\")\n        setTimeout(() => window.location.reload(), 600)\n      }\n    } else {\n      lastUpdate = new Date(parseInt(json))\n    }\n  })\n  .catch(err => {\n    console.clear()\n    console.log(\"Disconnected. Connection will resume when server restarts.\")\n    }\n  )\n}, 500)\n</script>\n";
}
exports.buildReloadScript = buildReloadScript;
