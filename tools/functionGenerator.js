const fs = require("fs");
const { elements } = require("./elements.js");
const { childless } = require("./childlessElements.js")

let htmlImports = "import {";
let svgImports = "import {";
let functionsString = 'import { genElemString } from "./baseFunctions";';

Object.keys(elements).forEach((key, i) => {
  const elementInterface = "Slam" + elements[key] + key.charAt(0).toUpperCase() + key.slice(1) + "Attributes";
  if (elements[key] === "HTML") {
    if (i === 0) {
      htmlImports += " " + elementInterface;
    } else {
      htmlImports += ", " + elementInterface;
    }
  } else {
    svgImports += ", " + elementInterface;
  }
  functionsString += "\n";
  if (!childless.includes(key)){
    functionsString += "\nfunction " + key + "(atts?: " + elementInterface + ", ...children: string[]): string;";
  }
  functionsString += "\nfunction " + key + "(atts?: " + elementInterface + "): string;";
  if (!childless.includes(key)){
    functionsString += "\nfunction " + key + "(...children: string[]): string;";
  }
  functionsString += "\nfunction " + key + "(): string;";
  if (childless.includes(key)){
    functionsString += "\nfunction " + key + "(arg1?: " + elementInterface + ") {";
    functionsString += '\n  return genElemString("' + key + '", arg1, []);';
    functionsString += "\n}";
  } else {
    functionsString += "\nfunction " + key + "(arg1?: " + elementInterface + " | string, ...arg2: string[]) {";
    functionsString += '\n  if (typeof arg1 === "string"){';
    functionsString += '\n    return genElemString("' + key + '", undefined, [arg1].concat(arg2));';
    functionsString += '\n  } else {';
    functionsString += '\n    return genElemString("' + key + '", arg1, arg2);';
    functionsString += '\n  }'
    functionsString += "\n}";
  }
});

htmlImports += '} from "./htmlInterfaces"\n';
svgImports += '} from "./svgInterfaces"\n';
functionsString += "\n\nexport {";

Object.keys(elements).forEach((key, i) => {
  if (i === 0) {
    functionsString += " " + key;
  } else {
    functionsString += ", " + key;
  }
});

functionsString += " };";

const finalString = htmlImports + svgImports + functionsString;

fs.writeFileSync("./src/elementFunctions.ts", finalString);
