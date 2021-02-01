const fs = require("fs");
const path = require("path");
const { elements } = require("./elements.js");
const { childless } = require("./childlessElements.js");

let htmlImports = "import {";
let svgImports = "import {";
let functionsString = 'import { genElemString } from "./baseFunctions";';
let firstSvg = true

Object.keys(elements).forEach((key, i) => {
  const elementInterface = "Slam" + elements[key] + key.charAt(0).toUpperCase() + key.slice(1) + "Attributes";
  const isChildless = childless.includes(key)
  elements[key] === "HTML" ? 
    htmlImports += (i === 0 ? " " : ", ") + elementInterface :
    firstSvg ?
      (svgImports += " " + elementInterface, firstSvg = false) :
      svgImports += ", " + elementInterface;
  functionsString += "\n";
  if (isChildless){
    functionsString += "\nfunction " + key + "(atts?: " + elementInterface + "): string;";
    functionsString += "\nfunction " + key + "(): string;";
    functionsString += "\nfunction " + key + "(arg1?: " + elementInterface + ") {";
    functionsString += '\n  return genElemString("' + key + '", arg1, []);';
    functionsString += "\n}";
  } else {
    functionsString += "\nfunction " + key + "(atts?: " + elementInterface + ", ...children: string[]): string;";
    functionsString += "\nfunction " + key + "(...children: string[]): string;";
    functionsString += "\nfunction " + key + "(): string;";
    functionsString += "\nfunction " + key + "(arg1?: " + elementInterface + " | string, ...arg2: string[]) {";
    functionsString += '\n  if (typeof arg1 === "string"){';
    if (key === "html"){
      functionsString += '\n    return "<!DOCTYPE html>" + genElemString("' + key + '", undefined, [arg1].concat(arg2));';
      functionsString += "\n  } else {";
      functionsString += '\n    return "<!DOCTYPE html>" + genElemString("' + key + '", arg1, arg2);';
    } else {
      functionsString += '\n    return genElemString("' + key + '", undefined, [arg1].concat(arg2));';
      functionsString += "\n  } else {";
      functionsString += '\n    return genElemString("' + key + '", arg1, arg2);';
    }
    functionsString += "\n  }";
    functionsString += "\n}";
  }
});

htmlImports += '} from "./htmlInterfaces"\n';
svgImports += '} from "./svgInterfaces"\n';
functionsString += "\n\nexport {";

Object.keys(elements).forEach((key, i) => {
  functionsString += (i === 0 ? " " : ", ") + key
});

functionsString += " };";

const finalString = htmlImports + svgImports + functionsString;

fs.writeFileSync(path.resolve(__dirname, "../src/elementFunctions.ts"), finalString);
