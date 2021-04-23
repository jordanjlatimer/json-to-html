import * as tsNode from "ts-node";

tsNode.register({
  compilerOptions: {
    module: "CommonJS",
    moduleResolution: "node",
    resolveJsonModule: true,
    allowSyntheticDefaultImports: true,
  },
  transpileOnly: true,
});

export * from "./elementFunctions";

export { Properties as CSSProperties } from "csstype";

export { Slam } from "./slam";

export { Child, CSSObject } from "./slamInterfaces";
