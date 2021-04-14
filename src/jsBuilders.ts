import { Identification } from "./slamInterfaces";

export function buildPageJsString(components: Identification): string {
  let build = "";
  Object.keys(components).forEach(key => {
    let js = components[parseInt(key)][0].atts?.js;
    build += js ? `(${js})();\n` : "";
  });
  return build;
}
