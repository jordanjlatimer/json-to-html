const css = require("../dist/cssBuilders.js");
const { expect, test } = require("@jest/globals");

test("buildPropertiesString - check property string building", () => {
  expect(css.buildPropertiesString({ height: "200px" })).toBe("height:200px;");
});

test("buildPropertiesString - check that camelCase is changed to kebab-case", () => {
  expect(css.buildPropertiesString({ backgroundColor: "green" })).toBe("background-color:green;");
});

test("buildPropertiesString - check with empty object", () => {
  expect(css.buildPropertiesString({})).toBe("");
});

test("buildSelectorString - check functionality", () => {
  expect(css.buildSelectorString(".card p", "height:200px;")).toBe(".card p{height:200px;}");
});

test("buildMediaQueryString - check functionality", () => {
  expect(
    css.buildMediaQueryString(".card p", "@media screen and (max-width: 525px)", {
      ":hover": { backgroundColor: "green" },
      width: "100%",
    })
  ).toBe("@media screen and (max-width: 525px){.card p{width:100%;}.card p:hover{background-color:green;}}");
});

test("buildCssFromObject - check basic", () => {
  expect(
    css.buildCssFromObject(".card", {
      height: "200px",
    })
  ).toBe(".card{height:200px;}");
});

test("buildCssFromObject - check pseudo selector", () => {
  expect(
    css.buildCssFromObject(".card", {
      ":hover": {
        backgroundColor: "green",
      },
    })
  ).toBe(".card:hover{background-color:green;}");
});

test("buildCssFromObject - check child selector", () => {
  expect(
    css.buildCssFromObject(".card", {
      p: {
        width: "200px",
      },
    })
  ).toBe(".card>p{width:200px;}");
});

test("buildCssFromObject - check media query", () => {
  expect(
    css.buildCssFromObject(".card", {
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

test("buildCssFromObject - check keyframes", () => {
  expect(
    css.buildCssFromObject(".card", {
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

test("buildPageCssString", () => {
  expect(
    css.buildPageCssString({
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
