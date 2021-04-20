const { div, hr } = require("../dist/elementFunctions.js");
const { expect, test } = require("@jest/globals");

test("parental element - no arguments", () => {
  expect(div()).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: [],
  });
});

test("parental element - only atts", () => {
  expect(div({ class: "card", hidden: true })).toStrictEqual({
    type: "element",
    tag: "div",
    atts: { class: "card", hidden: true },
    children: [],
  });
});

test("parental element - atts and one child", () => {
  expect(div({ class: "card", hidden: true }, "Hello World")).toStrictEqual({
    type: "element",
    tag: "div",
    atts: { class: "card", hidden: true },
    children: ["Hello World"],
  });
});

test("parental element - atts and two children", () => {
  expect(div({ class: "card", hidden: true }, "Hello World", "Hello Again")).toStrictEqual({
    type: "element",
    tag: "div",
    atts: { class: "card", hidden: true },
    children: ["Hello World", "Hello Again"],
  });
});

test("parental element - atts and array of children", () => {
  expect(div({ class: "card", hidden: true }, ["Hello World", "Hello Again"])).toStrictEqual({
    type: "element",
    tag: "div",
    atts: { class: "card", hidden: true },
    children: ["Hello World", "Hello Again"],
  });
});

test("parental element - atts, array of children, and stray child", () => {
  expect(div({ class: "card", hidden: true }, ["Hello World", "Hello Again"], "Goodbye")).toStrictEqual({
    type: "element",
    tag: "div",
    atts: { class: "card", hidden: true },
    children: ["Hello World", "Hello Again", "Goodbye"],
  });
});

test("parental element - one child", () => {
  expect(div("Hello World")).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: ["Hello World"],
  });
});

test("parental element - two children", () => {
  expect(div("Hello World", "Hello Again")).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: ["Hello World", "Hello Again"],
  });
});

test("parental element - array of children", () => {
  expect(div(["Hello World", "Hello Again"])).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: ["Hello World", "Hello Again"],
  });
});

test("parental element - array of children and stray child", () => {
  expect(div(["Hello World", "Hello Again"], "Goodbye")).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: ["Hello World", "Hello Again", "Goodbye"],
  });
});

test("childless element - no arguments", () => {
  expect(hr()).toStrictEqual({
    type: "element",
    tag: "hr",
    atts: {},
    children: [],
  });
});

test("childless element - no arguments", () => {
  expect(hr({ class: "line", hidden: true })).toStrictEqual({
    type: "element",
    tag: "hr",
    atts: { class: "line", hidden: true },
    children: [],
  });
});
