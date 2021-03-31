import { CSSObject, Page, SlamElement } from "./slamInterfaces";

export function SlamStyles<T extends Record<string, CSSObject>>(arg: T): T {
  return arg;
}

export function SlamPage(pageFunction: () => SlamElement): () => SlamElement;
export function SlamPage<T>(pageFunction: (args: T) => SlamElement): (args: T) => SlamElement;
export function SlamPage<T>(arg: (args: T) => SlamElement): (args: T) => SlamElement {
  return arg;
}

export function SlamPageBuilder(
  builderFunction: () => Array<Page | Promise<Page>> | Promise<Array<Page | Promise<Page>>>
) {
  return builderFunction;
}

export function SlamComponent(componentFunction: () => SlamElement): () => SlamElement;
export function SlamComponent<T>(componentFunction: (args: T) => SlamElement): (args: T) => SlamElement;
export function SlamComponent<T>(arg: (args: T) => SlamElement): (args: T) => SlamElement {
  return arg;
}
