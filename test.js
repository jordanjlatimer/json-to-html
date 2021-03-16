"use strict";
exports.__esModule = true;
var elementFunctions_1 = require("./dist/elementFunctions");
var page_1 = require("./dist/page");
var test2_1 = require("./test2");
var Index = page_1.CreatePage("index");
var Hello = page_1.CreateComponent(function (element) { return ({
    html: elementFunctions_1.div(element),
    css: {
        backgroundColor: "gray",
        ":hover": {
            transform: "scale(1.5)"
        }
    }
}); });
var GoodBye = page_1.CreateComponent({
    html: elementFunctions_1.div("Goodbye"),
    css: {
        backgroundColor: "red"
    }
});
var Jimmy = page_1.CreateElement(function (id) { return ({
    tag: "div",
    atts: { id: id }
}); });
Index.html = elementFunctions_1.html(elementFunctions_1.head(elementFunctions_1.title("Test")), elementFunctions_1.body(elementFunctions_1.div("Hello World"), Hello(elementFunctions_1.div("Hello World")), Hello(elementFunctions_1.div("Hello Again")), GoodBye, Jimmy("jimmy"), test2_1.Jackson));
Index.buildAll();
Index.writeFiles();
