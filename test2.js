const final = require("./tools/final.json");
const fs = require("fs");

let exportString = "export {"

final.forEach(key => {
  exportString += " " + key + "Atts,"
})

exportString += " }"

fs.writeFileSync("./newother.json", exportString);