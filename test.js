const { deepStyleMerge } = require("./dist/utils");

const a = {
  a: "a",
  b: true,
  c: false,
  d: {
    e: "freddy",
    f: "johny",
    g: 1,
  },
};

const b = {
  a: "any",
  b: true,
  c: 1,
  d: {
    e: "freddy",
    f: "johny",
    g: true,
  },
};

console.log(deepStyleMerge(a, b));
