import { CSSObject, Page, SlamElement } from "./slamInterfaces";
export declare function SlamStyles<T extends Record<string, CSSObject>>(arg: T): T;
export declare function SlamPage(pageFunction: () => SlamElement): () => SlamElement;
export declare function SlamPage<T>(pageFunction: (args: T) => SlamElement): (args: T) => SlamElement;
export declare function SlamPageBuilder(builderFunction: () => Array<Page | Promise<Page>> | Promise<Array<Page | Promise<Page>>>): () => Array<Page | Promise<Page>> | Promise<Array<Page | Promise<Page>>>;
export declare function SlamComponent(componentFunction: () => SlamElement): () => SlamElement;
export declare function SlamComponent<T>(componentFunction: (args: T) => SlamElement): (args: T) => SlamElement;
