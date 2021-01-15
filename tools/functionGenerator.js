const fs = require("fs");
const final = require("./final.json");

let finalString = 'import { genElemString } from "./src/functions";';

final.forEach(element => {
  finalString += "\n";
  finalString += "\nfunction " + element + "(atts?: { [key: string]: string }, children?: string[] | string): string;";
  finalString += "\nfunction " + element + "(children?: string[] | string): string;";
  finalString += "\nfunction " + element + "(atts?: { [key: string]: string }): string;";
  finalString += "\nfunction " + element + "(): string;";
  finalString +=
    "\nfunction " + element + "(arg1?: { [key: string]: string } | string[] | string, arg2?: string[] | string) {";
  finalString += '\n  return genElemString("' + element + '", arg1, arg2);';
  finalString += "\n}";
});

finalString += "\n\nexport {";

final.forEach((element, i) => {
  if (i === 0) {
    finalString += " " + element;
  } else {
    finalString += ", " + element;
  }
});

finalString += " };";

fs.writeFileSync("./test2.ts", finalString);
