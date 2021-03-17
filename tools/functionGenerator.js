const fs = require("fs");
const path = require("path");
const { elements, childless } = require("./elements.js");

let baseImports = 'import { Child, SlamElement } from "./slamInterfaces";\n';
let htmlImports = "import {";
let svgImports = "import {";
let functionsString = "";
let firstSvg = true;

Object.keys(elements).forEach((key, i) => {
  const functionName = key + (key === "var" || key === "switch" ? "_" : "");
  const elementInterface = elements[key] + functionName.charAt(0).toUpperCase() + functionName.slice(1) + "Attributes";
  const isChildless = childless.includes(key);
  elements[key] === "HTML"
    ? (htmlImports += (i === 0 ? " " : ", ") + elementInterface)
    : firstSvg
    ? ((svgImports += " " + elementInterface), (firstSvg = false))
    : (svgImports += ", " + elementInterface);
  functionsString += "\n";
  if (isChildless) {
    functionsString += `export const ${functionName} = (arg1?: ${elementInterface}): SlamElement => ({\n`;
    functionsString += `  tag: "${key}",\n`;
    functionsString += `  type: "element" as "element",\n`;
    functionsString += `  atts: arg1,\n`;
    functionsString += `  children: undefined\n`;
    functionsString += `})\n`;
  } else {
    functionsString += `export const ${functionName} = (arg1?: ${elementInterface} | Child, ...arg2: Child[]): SlamElement => {\n`;
    functionsString += `  let arg1IsChild = (arg1?.hasOwnProperty("tag") || arg1?.hasOwnProperty("html") || typeof arg1 === "string")\n`;
    functionsString += `  return {\n`;
    functionsString += `    tag: "${key}",\n`;
    functionsString += `    atts: arg1IsChild ? undefined : arg1,\n`;
    functionsString += `    type: "element" as "element",\n`;
    functionsString += `    children: arg1IsChild ? [arg1 as Child].concat(arg2) : arg2.length === 0 ? undefined : arg2\n`;
    functionsString += `  }\n`;
    functionsString += `}\n`;
  }
});

htmlImports += '} from "./htmlInterfaces"\n';
svgImports += '} from "./svgInterfaces"\n';

const finalString = baseImports + htmlImports + svgImports + functionsString;

fs.writeFileSync(path.resolve(__dirname, "../src/elementFunctions.ts"), finalString);
