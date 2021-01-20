const atts = require("./other.json")
const fs = require("fs")


Object.keys(atts).filter(key => key !== "*").forEach(key => {
  const newArray = atts[key].filter(att => !atts["*"].includes(att))
  atts[key] = newArray
})

fs.writeFileSync("./newnewother.json", JSON.stringify(atts))