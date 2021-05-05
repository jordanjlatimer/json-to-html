const css = require("../dist/cssBuilders.js");
const { expect, test } = require("@jest/globals");

test("buildProperties - check property string building", () => {
  expect(css.buildProperties({ height: "200px" })).toBe("height:200px;");
});

test("buildProperties - check that camelCase is changed to kebab-case", () => {
  expect(css.buildProperties({ backgroundColor: "green" })).toBe("background-color:green;");
});

test("buildProperties - check with empty object", () => {
  expect(css.buildProperties({})).toBe("");
});

test("buildSelector - check functionality", () => {
  expect(css.buildSelector(".card p", "height:200px;")).toBe(".card p{height:200px;}");
});

test("buildMediaQuery - check functionality", () => {
  expect(
    css.buildMediaQuery(".card p", "@media screen and (max-width: 525px)", {
      ":hover": { backgroundColor: "green" },
      width: "100%",
    })
  ).toBe("@media screen and (max-width: 525px){.card p{width:100%;}.card p:hover{background-color:green;}}");
});

test("buildCss - check basic", () => {
  expect(
    css.buildCss(".card", {
      height: "200px",
    })
  ).toBe(".card{height:200px;}");
});

test("buildCss - check pseudo selector", () => {
  expect(
    css.buildCss(".card", {
      ":hover": {
        backgroundColor: "green",
      },
    })
  ).toBe(".card:hover{background-color:green;}");
});

test("buildCss - check child selector", () => {
  expect(
    css.buildCss(".card", {
      p: {
        width: "200px",
      },
    })
  ).toBe(".card>p{width:200px;}");
});

test("buildCss - check media query", () => {
  expect(
    css.buildCss(".card", {
      "@media screen and (max-width: 525px)": {
        width: "100%",
        ":hover": {
          backgroundColor: "gray",
        },
        p: {
          width: "150px",
        },
      },
    })
  ).toBe(
    "@media screen and (max-width: 525px){.card{width:100%;}.card:hover{background-color:gray;}.card>p{width:150px;}}"
  );
});

test("buildCss - check keyframes", () => {
  expect(
    css.buildCss(".card", {
      "@keyframes fade": {
        from: {
          opacity: "1",
        },
        to: {
          opacity: "0",
        },
      },
    })
  ).toBe("@keyframes fade{from{opacity:1;}to{opacity:0;}}");
});

test("buildPageCss", () => {
  expect(
    css.buildPageCss({
      1: [
        {
          atts: {
            css: {
              width: "100px",
            },
          },
        },
        {
          atts: {
            css: {
              width: "100px",
            },
          },
        },
      ],
      2: [
        {
          atts: {
            css: {
              width: "200px",
            },
          },
        },
      ],
    })
  ).toBe(".c1{width:100px;}.c2{width:200px;}");
});
