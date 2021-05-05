const { buildSlamElement } = require("../dist/otherBuilders.js");
const { expect, test } = require("@jest/globals");

test("buildSlamElement - only tag", () => {
  expect(buildSlamElement("div")).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: [],
  });
});

test("buildSlamElement - tag and atts", () => {
  expect(buildSlamElement("div", { class: "card" })).toStrictEqual({
    type: "element",
    tag: "div",
    atts: { class: "card" },
    children: [],
  });
});

test("buildSlamElement - tag and child", () => {
  expect(buildSlamElement("div", "Hello World")).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: ["Hello World"],
  });
});

test("buildSlamElement - tag and child array", () => {
  expect(buildSlamElement("div", ["Hello World"])).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: ["Hello World"],
  });
});

test("buildSlamElement - tag, atts, and child array", () => {
  expect(buildSlamElement("div", { class: "card" }, ["Hello World"])).toStrictEqual({
    type: "element",
    tag: "div",
    atts: { class: "card" },
    children: ["Hello World"],
  });
});

test("buildSlamElement - tag, child, and child array", () => {
  expect(buildSlamElement("div", "Hello World", ["Hello Again"])).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: ["Hello World", "Hello Again"],
  });
});

test("buildSlamElement - tag, child array, and child array", () => {
  expect(buildSlamElement("div", ["Hello World"], ["Hello Again"])).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: ["Hello World", "Hello Again"],
  });
});

test("buildSlamElement - tag, atts, and nested child array", () => {
  expect(buildSlamElement("div", { class: "card" }, [["Hello World"]])).toStrictEqual({
    type: "element",
    tag: "div",
    atts: { class: "card" },
    children: ["Hello World"],
  });
});

test("buildSlamElement - tag, child, and nested child array", () => {
  expect(buildSlamElement("div", "Hello World", [["Hello Again"]])).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: ["Hello World", "Hello Again"],
  });
});

test("buildSlamElement - tag, child array, and nested child array", () => {
  expect(buildSlamElement("div", ["Hello World"], [["Hello Again"]])).toStrictEqual({
    type: "element",
    tag: "div",
    atts: {},
    children: ["Hello World", "Hello Again"],
  });
});
