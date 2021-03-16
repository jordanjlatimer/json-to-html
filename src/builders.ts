import { SlamElement, Child, SlamComponent } from "./baseInterfaces";
import { parseAtts, noChildren, equalObjects } from "./utils";

const findComponents = (tree: Child, counter: number): SlamComponent[] => {
  let finalArray: SlamComponent[] = [];
  if (typeof tree === "string") {
    undefined;
  } else if (tree["type"] === "element") {
    tree["children"]?.forEach(child => {
      finalArray = finalArray.concat(findComponents(child, counter));
    });
  } else if (tree["type"] === "component") {
    finalArray.push(tree);
    finalArray = finalArray.concat(findComponents(tree["html"], counter + 1));
  }
  return finalArray;
};

interface Indentification {
  [key: number]: SlamComponent[];
}

const findUniqueCss = (array: SlamComponent[]) => {
  let identities: Indentification = {};
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

export const identifyComponents = (tree: SlamElement) => {
  return findUniqueCss(findComponents(tree, 0));
};

const constructElement = (
  tree: SlamElement | string,
  currentString: string,
  components: Indentification,
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

const routeChild = (tree: Child, currentString: string, components: Indentification) => {
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

export const buildHtmlFromObject = (tree: Child, components: Indentification) => {
  return routeChild(tree, "", components);
};
