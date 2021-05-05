const { buildJs } = require("../dist/jsBuilders.js");
const { expect, test } = require("@jest/globals");

test("buildJs - emptyObject", () => {
  expect(buildJs({})).toBe("");
});

test("buildJs - 1 component", () => {
  const logToConsole = () => console.log("Hello World");

  expect(
    buildJs({
      1: [
        {
          type: "element",
          tag: "div",
          atts: {
            js: logToConsole,
          },
        },
      ],
    })
  ).toBe('(() => console.log("Hello World"))();\n');
});

test("buildJs - multiple components", () => {
  const logToConsole1 = () => console.log("Hello World");
  const logToConsole2 = () => console.log("Hello Again");

  expect(
    buildJs({
      1: [
        {
          type: "element",
          tag: "div",
          atts: {
            js: logToConsole1,
          },
        },
      ],
      2: [
        {
          type: "element",
          tag: "div",
          atts: {
            js: logToConsole2,
          },
        },
      ],
    })
  ).toBe('(() => console.log("Hello World"))();\n(() => console.log("Hello Again"))();\n');
});
