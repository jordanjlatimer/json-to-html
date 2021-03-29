import * as fs from "fs";
import * as path from "path";
import * as tsNode from "ts-node";
import { buildPage } from "./builders";
import { Page } from "./slamInterfaces";

tsNode.register({
  compilerOptions: {
    module: "CommonJS",
    moduleResolution: "node",
    strict: true,
    resolveJsonModule: true,
    allowSyntheticDefaultImports: true,
  },
});

export async function BuildFiles(indexFile: string, outDir: string) {
  const pages: Page[] = require(indexFile)["default"];
  let builds = await Promise.all(
    pages.map(async page => {
      let resolved = await page;
      return {
        name: resolved.name,
        ...(await buildPage(page)),
      };
    })
  );
  builds.forEach(build => {
    fs.writeFileSync(path.resolve(outDir, `${build.name}.html`), build.html);
    fs.writeFileSync(path.resolve(outDir, `${build.name}.css`), build.css);
    fs.writeFileSync(path.resolve(outDir, `${build.name}.js`), build.js);
  });
}
