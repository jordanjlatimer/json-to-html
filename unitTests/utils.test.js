const {
  toKebabCase,
  areEqualObjects,
  collectElementsWithCss,
  determineSimilarElementsByCss,
  deepStyleMerge,
} = require("../dist/utils.js");
const { expect, test } = require("@jest/globals");

test("toKebabCase - normal string that shouldn't be changed", () => {
  expect(toKebabCase("color")).toBe("color");
});

test("toKebabCase - camelCase string", () => {
  expect(toKebabCase("backgroundColor")).toBe("background-color");
});

test("areEqualObjects - shallow equal", () => {
  expect(
    areEqualObjects(
      {
        a: "a",
        b: 2,
        c: true,
      },
      {
        a: "a",
        b: 2,
        c: true,
      }
    )
  ).toBe(true);
});

test("areEqualObjects - shallow unequal", () => {
  expect(
    areEqualObjects(
      {
        a: "a",
        b: 3,
        c: true,
      },
      {
        a: "a",
        b: 2,
        c: true,
      }
    )
  ).toBe(false);
});

test("areEqualObjects - deep equal", () => {
  expect(
    areEqualObjects(
      {
        a: "a",
        b: {
          a: {
            a: 2,
            b: true,
          },
        },
      },
      {
        a: "a",
        b: {
          a: {
            a: 2,
            b: true,
          },
        },
      }
    )
  ).toBe(true);
});

test("areEqualObjects - deep unequal", () => {
  expect(
    areEqualObjects(
      {
        a: "a",
        b: {
          a: {
            a: 2,
            b: true,
          },
        },
      },
      {
        a: "a",
        b: {
          a: {
            a: 3,
            b: true,
          },
        },
      }
    )
  ).toBe(false);
});

const tree = {
  type: "element",
  tag: "div",
  atts: { css: { backgroundColor: "green" } },
  children: [
    {
      type: "element",
      tag: "div",
      atts: { css: { backgroundColor: "green" } },
      children: [
        {
          type: "element",
          tag: "div",
          atts: { css: { backgroundColor: "blue" } },
          children: [],
        },
        {
          type: "element",
          tag: "div",
          atts: { css: { color: "red" } },
          children: [],
        },
      ],
    },
  ],
};

const cssArray = [tree, tree.children[0], tree.children[0].children[0], tree.children[0].children[1]];

const identification = {
  0: [tree, tree.children[0]],
  1: [tree.children[0].children[0]],
  2: [tree.children[0].children[1]],
};

test("collectElementsWithCss - test functionality", () => {
  //Technically, I need referential equality, but this is the best I can do.
  expect(collectElementsWithCss(tree)).toStrictEqual(cssArray);
});

test("determineSimilarElementsByCss - test functionality", () => {
  expect(determineSimilarElementsByCss(cssArray)).toStrictEqual(identification);
});

const styles1 = {
  height: "200px",
  ":hover": {
    backgroundColor: "red",
  },
  p: {
    fontSize: "2rem",
  },
  "@media screen and (min-width: 600px)": {
    ":hover": {
      backgroundColor: "green",
    },
  },
  "@keyframes fade": {
    from: {
      opacity: "1",
    },
    to: {
      opacity: "0",
    },
  },
  "::after": {
    backgroundColor: "blue",
  },
};

const styles2 = {
  ":hover": {
    backgroundColor: "blue",
  },
  p: {
    color: "red",
  },
  div: {
    margin: "20px",
  },
  "@media screen and (min-width: 600px)": {
    ":hover": {
      backgroundColor: "red",
    },
  },
  "::after": undefined,
};

const merged = {
  height: "200px",
  ":hover": {
    backgroundColor: "blue",
  },
  p: {
    color: "red",
    fontSize: "2rem",
  },
  div: {
    margin: "20px",
  },
  "@media screen and (min-width: 600px)": {
    ":hover": {
      backgroundColor: "red",
    },
  },
  "@keyframes fade": {
    from: {
      opacity: "1",
    },
    to: {
      opacity: "0",
    },
  },
};

test("deepStyleMerge - test functionality", () => {
  expect(deepStyleMerge(styles1, styles2)).toStrictEqual(merged);
});
