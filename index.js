const tree = {
  html: {
    atts: {
      lang: "en-US"
    },
    head: {
      title: {
        noTag: "Jordan Latimer"
      },
      meta: {
        atts: {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }
      },
      link: {
        atts: {
          rel: "icon",
          href: "assets/favicon.ico"
        }
      }
    },
    body: {
      div: {
        noTag: "Hello World"
      }
    }
  }
}

function genHtml(tree){
  let html = "";
  let keyAtts = "";
  if (tree["atts"]){
    Object.keys(tree["atts"]).forEach(att => {
      keyAtts += " " + att + '="' + tree["atts"][att] + '"';
    });
  };
  html += keyAtts + ">"
  if (Object.keys(tree).filter(key => key !== "atts").length > 0){
    Object.keys(tree).filter(key => key !== "atts").forEach(key => {
      if (key === "noTag"){
        html += tree[key];
      } else {
        html += "<" + key + genHtml(tree[key]) + "</" + key + ">"
      };
    });
  };
  return html;
}

console.log("<!DOCTYPE html" + genHtml(tree));