const fs = require("fs");
const path = require("path");
const { elements, childless } = require("./elements.js");

let baseImports = 'import { Child, SlamElement } from "./slamInterfaces";\n';
baseImports += `import { buildSlamElement } from "./utils";\n`;
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
    functionsString += `export function ${functionName}(arg1?: ${elementInterface}): SlamElement {\n`;
    functionsString += `  let css = arg1 ? arg1["css"] : undefined\n`;
    functionsString += `  let js = arg1 ? arg1["js"] : undefined\n`;
    functionsString += `  return {\n`;
    functionsString += `    type: "element",\n`;
    functionsString += `    tag: "${key}",\n`;
    functionsString += `    atts: {...arg1, css: css, js: js},\n`;
    functionsString += `    children: undefined\n`;
    functionsString += `  }\n`;
    functionsString += `};\n`;
  } else {
    functionsString += `export function ${functionName}(arg1?: ${elementInterface} | Child, ...arg2: Child[]): SlamElement {\n`;
    functionsString += `  let atts: (${elementInterface} | undefined) = undefined\n`;
    functionsString += `  return buildSlamElement(arg1, arg2, atts, "${key}")\n`;
    functionsString += `};\n`;
  }
});

htmlImports += '} from "./htmlInterfaces";\n';
svgImports += '} from "./svgInterfaces";\n';

const finalString = baseImports + htmlImports + svgImports + functionsString;

fs.writeFileSync(path.resolve(__dirname, "../src/elementFunctions.ts"), finalString);
