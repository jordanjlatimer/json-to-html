function selfClosing(tag: string) {
  const selfClosers = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
    "circle",
    "ellipse",
    "line",
    "path",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "use",
  ];
  return selfClosers.includes(tag);
}

function parseAtts(atts: { [key: string]: string }) {
  let attsText = "";
  Object.keys(atts).forEach(att => {
    attsText += " " + att + '="' + atts[att] + '"';
  });
  return attsText;
}

function slam(arg1: string, arg2?: string[], arg3?: { [key: string]: string }): string;
function slam(arg1: string, arg2?: { [key: string]: string }, arg3?: string[]): string;
function slam(arg1: string, arg2?: { [key: string]: string }): string;
function slam(arg1: string, arg2?: string[]): string;
function slam(arg1: string): string;
function slam(
  arg1: string,
  arg2?: string[] | { [key: string]: string } | undefined,
  arg3?: string[] | { [key: string]: string } | undefined
): string {
  let html = "<" + arg1;
  if (arg2) {
    if (Array.isArray(arg2)) {
      if (arg3) {
        if (!Array.isArray(arg3)) {
          html += parseAtts(arg3);
        }
      }
      html += ">";
      if (selfClosing(arg1)) {
        throw new Error("Children are not permitted for " + arg1 + " tag.");
      } else {
        arg2.forEach(child => {
          html += child;
        });
        html += "</" + arg1 + ">";
      }
    } else {
      html += parseAtts(arg2) + ">";
      if (arg3) {
        if (selfClosing(arg1)) {
          throw new Error("Children are not permitted for " + arg1 + " tag.");
        } else {
          if (Array.isArray(arg3)) {
            arg3.forEach(child => {
              html += child;
            });
            html += "</" + arg1 + ">";
          }
        }
      }
    }
  } else {
    html += ">";
    if (!selfClosing(arg1)) {
      html += "</" + arg1 + ">";
    }
  }
  return html;
}

export { slam };
