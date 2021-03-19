import { Identification, ResolvedChild, ResolvedSlamComponent, ResolvedSlamElement } from "./slamInterfaces";
import { parseAtts, noChildren, equalObjects } from "./utils";

const findComponents = (tree: ResolvedChild): ResolvedSlamComponent[] => {
  let finalArray: ResolvedSlamComponent[] = [];
  if (typeof tree === "string") {
    undefined;
  } else if (tree["type"] === "element") {
    tree["children"]?.forEach(child => {
      finalArray = finalArray.concat(findComponents(child));
    });
  } else if (tree["type"] === "component") {
    finalArray.push(tree);
    finalArray = finalArray.concat(findComponents(tree["html"]));
  }
  return finalArray;
};

const findUniqueCss = (array: ResolvedSlamComponent[]) => {
  let identities: Identification = {};
  let identitiesIndex = 0;
  array.forEach(component => {
    if (identitiesIndex === 0) {
      identities[identitiesIndex] = [component];
      identitiesIndex += 1;
    } else {
      let keepGoing = true;
      Object.keys(identities).forEach(key => {
        if (keepGoing) {
          identities[parseInt(key)].forEach(item => {
            if (keepGoing) {
              if (equalObjects(component.css || {}, item.css || {})) {
                identities[parseInt(key)].push(component);
              } else {
                identities[identitiesIndex] = [component];
                identitiesIndex += 1;
              }
              keepGoing = false;
            }
          });
        }
      });
    }
  });
  return identities;
};

export const identifyComponents = (tree: ResolvedSlamElement) => {
  return findUniqueCss(findComponents(tree));
};

const constructElement = (
  tree: ResolvedSlamElement | string,
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

const routeChild = (tree: ResolvedChild, currentString: string, components: Identification) => {
  if (typeof tree === "string") {
    return tree;
  } else if (tree["type"] === "component") {
    let className = "";
    Object.keys(components).forEach(key => {
      components[parseInt(key)].forEach(component => {
        if (component === tree) {
          className = `c${key}`;
        }
      });
    });
    return constructElement(tree["html"], currentString, components, className);
  } else if (tree["type"] === "element") {
    return constructElement(tree, currentString, components);
  } else {
    return currentString;
  }
};

export const buildHtmlFromObject = (tree: ResolvedChild, components: Identification) => {
  return routeChild(tree, "", components);
};
