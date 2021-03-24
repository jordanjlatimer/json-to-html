import { Identification, ResolvedChild, SlamElement } from "./slamInterfaces";
import { parseAtts, noChildren, equalObjects } from "./utils";

const findElementsWithCSS = (tree: ResolvedChild): SlamElement[] => {
  let finalArray: SlamElement[] = [];
  if (typeof tree === "object") {
    if (tree.atts?.css) {
      finalArray.push(tree);
    }
    tree["children"]?.forEach(child => {
      finalArray = finalArray.concat(findElementsWithCSS(child));
    });
  }
  return finalArray;
};

const findUniqueCss = (array: SlamElement[]) => {
  let identities: Identification = {};
  let identitiesIndex = 0;
  array.forEach(element => {
    if (identitiesIndex === 0) {
      identities[identitiesIndex] = [element];
      identitiesIndex += 1;
    } else {
      let matchFound = false;
      Object.keys(identities).forEach(key => {
        if (!matchFound) {
          identities[parseInt(key)].forEach(item => {
            if (!matchFound) {
              if (equalObjects(element.atts?.css || {}, item.atts?.css || {})) {
                identities[parseInt(key)].push(element);
                matchFound = true;
              }
            }
          });
        }
      });
      if (!matchFound) {
        identities[identitiesIndex] = [element];
        identitiesIndex += 1;
      }
    }
  });
  return identities;
};

export const identifyCssElements = (tree: SlamElement) => {
  return findUniqueCss(findElementsWithCSS(tree));
};

const constructElement = (
  tree: SlamElement | string,
  currentString: string,
  components: Identification,
  className?: string
) => {
  if (typeof tree === "string") {
    return tree;
  }
  currentString += `<${tree["tag"]}`;
  if (tree["atts"] || className) {
    const atts = tree["atts"] || {};
    const attsClass = atts["class"] || "";
    const fullClass = className ? (attsClass ? `${attsClass} ${className}` : className) : attsClass;
    const classObject = fullClass ? { class: fullClass } : {};
    currentString += parseAtts({ ...atts, ...classObject });
  }
  if (noChildren(tree["tag"])) {
    currentString += "/>";
  } else {
    currentString += ">";
  }
  if (tree["children"]) {
    tree["children"].forEach(child => {
      currentString += routeChild(child, "", components);
    });
  }
  if (tree["tag"]) {
    if (!noChildren(tree["tag"])) {
      currentString += `</${tree["tag"]}>`;
    }
  }
  return currentString;
};

const routeChild = (tree: ResolvedChild, currentString: string, cssElements: Identification) => {
  if (typeof tree === "string") {
    return tree;
  } else {
    let className = "";
    Object.keys(cssElements).forEach(key => {
      cssElements[parseInt(key)].forEach(element => {
        if (element === tree) {
          className = `c${key}`;
        }
      });
    });
    return constructElement(tree, currentString, cssElements, className);
  }
};

export const buildHtmlFromObject = (tree: ResolvedChild, cssElements: Identification) => {
  return routeChild(tree, "", cssElements);
};
