import * as tsNode from "ts-node";

tsNode.register({
  compilerOptions: {
    module: "CommonJS",
    moduleResolution: "node",
    resolveJsonModule: true,
    allowSyntheticDefaultImports: true,
  },
});

export * from "./elementFunctions";

export { Child, CSSObject } from "./slamInterfaces";

export { CreateSlamServer } from "./server";

export { BuildFiles } from "./builders";

export { CSS } from "./generateCss";
