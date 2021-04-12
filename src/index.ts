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

export { Child, CSSObject } from "./slamInterfaces";

export { StartSlamServer } from "./server";

export { buildFiles } from "./builders";
