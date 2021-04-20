const { buildSlamElementObject } = require("../dist/otherBuilders.js");
const { expect, test } = require("@jest/globals");

test("buildSlamElementObject - only tag", () => {
  expect(buildSlamElementObject("div")).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: [],
  });
});

test("buildSlamElementObject - tag and atts", () => {
  expect(buildSlamElementObject("div", { class: "card" })).toStrictEqual({
    type: "element",
    tag: "div",
    atts: { class: "card" },
    children: [],
  });
});

test("buildSlamElementObject - tag and child", () => {
  expect(buildSlamElementObject("div", "Hello World")).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: ["Hello World"],
  });
});

test("buildSlamElementObject - tag and child array", () => {
  expect(buildSlamElementObject("div", ["Hello World"])).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: ["Hello World"],
  });
});

test("buildSlamElementObject - tag, atts, and child array", () => {
  expect(buildSlamElementObject("div", { class: "card" }, ["Hello World"])).toStrictEqual({
    type: "element",
    tag: "div",
    atts: { class: "card" },
    children: ["Hello World"],
  });
});

test("buildSlamElementObject - tag, child, and child array", () => {
  expect(buildSlamElementObject("div", "Hello World", ["Hello Again"])).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: ["Hello World", "Hello Again"],
  });
});

test("buildSlamElementObject - tag, child array, and child array", () => {
  expect(buildSlamElementObject("div", ["Hello World"], ["Hello Again"])).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: ["Hello World", "Hello Again"],
  });
});

test("buildSlamElementObject - tag, atts, and nested child array", () => {
  expect(buildSlamElementObject("div", { class: "card" }, [["Hello World"]])).toStrictEqual({
    type: "element",
    tag: "div",
    atts: { class: "card" },
    children: ["Hello World"],
  });
});

test("buildSlamElementObject - tag, child, and nested child array", () => {
  expect(buildSlamElementObject("div", "Hello World", [["Hello Again"]])).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: ["Hello World", "Hello Again"],
  });
});

test("buildSlamElementObject - tag, child array, and nested child array", () => {
  expect(buildSlamElementObject("div", ["Hello World"], [["Hello Again"]])).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: ["Hello World", "Hello Again"],
  });
});
