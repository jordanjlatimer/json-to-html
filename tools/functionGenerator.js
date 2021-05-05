const fs = require("fs");
const path = require("path");
const { elements, childless } = require("./elements.js");

let baseImports = 'import { Child, SlamElement, TagAttributes } from "./slamInterfaces";\n';
baseImports += `import { buildSlamElement } from "./otherBuilders";\n\n`;
let functionsString = "";

elements.forEach(key => {
  const isChildless = childless.includes(key);
  if (isChildless) {
    functionsString += `export function ${key}(arg1?: TagAttributes<"${key}">): SlamElement<"${key}"> {\n`;
    functionsString += `  return buildSlamElement("${key}", arg1)\n`;
    functionsString += `};\n\n`;
  } else {
    functionsString += `export function ${key}(arg1?: TagAttributes<"${key}"> | Child | Child[], ...arg2: (Child | Child[])[]): SlamElement<"${key}"> {\n`;
    functionsString += `  return buildSlamElement("${key}", arg1, arg2)\n`;
    functionsString += `};\n\n`;
  }
});

const finalString = baseImports + functionsString;
fs.writeFileSync(path.resolve(__dirname, "../src/elementFunctions.ts"), finalString);
