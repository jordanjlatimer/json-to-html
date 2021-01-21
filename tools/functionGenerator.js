const fs = require("fs");
const { elements } = require("./elements.js");

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
  functionsString += "\nfunction " + key + "(atts?: " + elementInterface + ", children?: string[] | string): string;";
  functionsString += "\nfunction " + key + "(atts?: " + elementInterface + "): string;";
  functionsString += "\nfunction " + key + "(children?: string[] | string): string;";
  functionsString += "\nfunction " + key + "(): string;";
  functionsString +=
    "\nfunction " + key + "(arg1?: " + elementInterface + " | string[] | string, arg2?: string[] | string) {";
  functionsString += '\n  return genElemString("' + key + '", arg1, arg2);';
  functionsString += "\n}";
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
