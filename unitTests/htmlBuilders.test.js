const { buildAttsString, buildElementAndChildrenStrings, buildPageHtmlString } = require("../dist/htmlBuilders.js");
const { expect, test } = require("@jest/globals");

test("buildAttsString - empty object", () => {
  expect(buildAttsString({})).toBe("");
});

test("buildAttsString - normal atts", () => {
  expect(buildAttsString({ class: "card", id: "card1" })).toBe(' class="card" id="card1"');
});

test("buildAttsString - present atts", () => {
  expect(buildAttsString({ hidden: true, disabled: true })).toBe(" hidden disabled");
});

test("buildAttsString - camel atts", () => {
  expect(buildAttsString({ alignmentBaseline: "middle", baselineShift: "100%" })).toBe(
    ' alignment-baseline="middle" baseline-shift="100%"'
  );
});

test("buildElementAndChildrenStrings - string", () => {
  expect(buildElementAndChildrenStrings("Hello World", {})).toBe("Hello World");
});

test("buildElementAndChildrenStrings - parental, no children or atts", () => {
  expect(
    buildElementAndChildrenStrings(
      {
        type: "element",
        tag: "div",
        atts: {},
        children: [],
      },
      {}
    )
  ).toBe("<div></div>");
});

test("buildElementAndChildrenStrings - childless, no atts", () => {
  expect(
    buildElementAndChildrenStrings(
      {
        type: "element",
        tag: "hr",
        atts: {},
        children: [],
      },
      {}
    )
  ).toBe("<hr/>");
});

test("buildElementAndChildrenStrings - parental, atts but no children", () => {
  expect(
    buildElementAndChildrenStrings(
      {
        type: "element",
        tag: "div",
        atts: { class: "card", hidden: true },
        children: [],
      },
      {}
    )
  ).toBe('<div class="card" hidden></div>');
});

test("buildElementAndChildrenStrings - childless, atts", () => {
  expect(
    buildElementAndChildrenStrings(
      {
        type: "element",
        tag: "hr",
        atts: { class: "line", hidden: true },
        children: [],
      },
      {}
    )
  ).toBe('<hr class="line" hidden/>');
});

test("buildElementAndChildrenStrings - parental, atts and string child", () => {
  expect(
    buildElementAndChildrenStrings(
      {
        type: "element",
        tag: "div",
        atts: { class: "card", hidden: true },
        children: ["Hello World"],
      },
      {}
    )
  ).toBe('<div class="card" hidden>Hello World</div>');
});

test("buildElementAndChildrenStrings - parental, atts and tag child", () => {
  expect(
    buildElementAndChildrenStrings(
      {
        type: "element",
        tag: "div",
        atts: { class: "card", hidden: true },
        children: [
          {
            type: "element",
            tag: "p",
            atts: {},
            children: [],
          },
        ],
      },
      {}
    )
  ).toBe('<div class="card" hidden><p></p></div>');
});

test("buildElementAndChildrenStrings - parental, atts and multiple children", () => {
  expect(
    buildElementAndChildrenStrings(
      {
        type: "element",
        tag: "div",
        atts: { class: "card", hidden: true },
        children: [
          {
            type: "element",
            tag: "p",
            atts: {},
            children: [],
          },
          "Hello World",
        ],
      },
      {}
    )
  ).toBe('<div class="card" hidden><p></p>Hello World</div>');
});

test("buildElementAndChildrenStrings - parental, atts and nested children", () => {
  expect(
    buildElementAndChildrenStrings(
      {
        type: "element",
        tag: "div",
        atts: { class: "card", hidden: true },
        children: [
          {
            type: "element",
            tag: "p",
            atts: {},
            children: ["Hello World"],
          },
          {
            type: "element",
            tag: "div",
            atts: {},
            children: ["Hello Again"],
          },
        ],
      },
      {}
    )
  ).toBe('<div class="card" hidden><p>Hello World</p><div>Hello Again</div></div>');
});

test("buildElementAndChildrenStrings - parental, no atts and nested children", () => {
  expect(
    buildElementAndChildrenStrings(
      {
        type: "element",
        tag: "div",
        atts: {},
        children: [
          {
            type: "element",
            tag: "p",
            atts: {},
            children: ["Hello World"],
          },
          {
            type: "element",
            tag: "div",
            atts: {},
            children: ["Hello Again"],
          },
        ],
      },
      {}
    )
  ).toBe("<div><p>Hello World</p><div>Hello Again</div></div>");
});

test("buildPageHtmlString - string, no components", () => {
  expect(buildPageHtmlString("<svg><g></g></svg>", {})).toBe("<svg><g></g></svg>");
});

test("buildPageHtmlString - tree, no components", () => {
  expect(
    buildPageHtmlString(
      {
        type: "element",
        tag: "div",
        atts: { class: "card", hidden: true },
        children: ["Hello World"],
      },
      {}
    )
  ).toBe('<div class="card" hidden>Hello World</div>');
});

test("buildPageHtmlString - tree, components", () => {
  const component = {
    type: "element",
    tag: "div",
    atts: { class: "card", hidden: true, css: { height: "200px" } },
    children: ["Hello World"],
  };

  expect(buildPageHtmlString(component, { 1: [component] })).toBe('<div class="card c1" hidden>Hello World</div>');
});
