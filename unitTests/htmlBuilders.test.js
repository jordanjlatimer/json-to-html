const { buildAtts, buildHtml } = require("../dist/htmlBuilders.js");
const { expect, test } = require("@jest/globals");

test("buildAtts - empty object", () => {
  expect(buildAtts({})).toBe("");
});

test("buildAtts - normal atts", () => {
  expect(buildAtts({ class: "card", id: "card1" })).toBe(' class="card" id="card1"');
});

test("buildAtts - present atts", () => {
  expect(buildAtts({ hidden: true, disabled: true })).toBe(" hidden disabled");
});

test("buildAtts - camel atts", () => {
  expect(buildAtts({ alignmentBaseline: "middle", baselineShift: "100%" })).toBe(
    ' alignment-baseline="middle" baseline-shift="100%"'
  );
});

test("buildAtts - ignore js, css, and object atts", () => {
  expect(
    buildAtts({
      alignmentBaseline: "middle",
      baselineShift: "100%",
      js: () => console.log("js"),
      css: { height: "200px" },
      child: { class: "class" },
    })
  ).toBe(' alignment-baseline="middle" baseline-shift="100%"');
});

test("buildHtml - string", () => {
  expect(buildHtml("Hello World", {})).toBe("Hello World");
});

test("buildHtml - parental, no children or atts", () => {
  expect(
    buildHtml(
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

test("buildHtml - childless, no atts", () => {
  expect(
    buildHtml(
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

test("buildHtml - parental, atts but no children", () => {
  expect(
    buildHtml(
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

test("buildHtml - childless, atts", () => {
  expect(
    buildHtml(
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

test("buildHtml - parental, atts and string child", () => {
  expect(
    buildHtml(
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

test("buildHtml - parental, atts and tag child", () => {
  expect(
    buildHtml(
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

test("buildHtml - parental, atts and multiple children", () => {
  expect(
    buildHtml(
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

test("buildHtml - parental, atts and nested children", () => {
  expect(
    buildHtml(
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

test("buildHtml - parental, no atts and nested children", () => {
  expect(
    buildHtml(
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

test("buildHtml - string, no components", () => {
  expect(buildHtml("<svg><g></g></svg>", {})).toBe("<svg><g></g></svg>");
});

test("buildHtml - tree, no components", () => {
  expect(
    buildHtml(
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

test("buildHtml - tree, components", () => {
  const component = {
    type: "element",
    tag: "div",
    atts: { class: "card", hidden: true, css: { height: "200px" } },
    children: ["Hello World"],
  };

  expect(buildHtml(component, { 1: [component] })).toBe('<div class="card c1" hidden>Hello World</div>');
});
