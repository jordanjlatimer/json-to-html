import { CSSObject, Page, SlamElement, TagAttributes, TagName, Child, ChildlessElements, ParentalElements } from "./slamInterfaces";
declare function SlamStyles<T extends Record<string, CSSObject>>(arg: T): T;
declare function SlamPage<T>(arg: (args: T) => SlamElement<"html">): (args: T) => SlamElement<"html">;
declare function SlamPageBuilder(builderFunction: () => Array<Page | Promise<Page>> | Promise<Array<Page | Promise<Page>>>): () => Array<Page | Promise<Page>> | Promise<Array<Page | Promise<Page>>>;
declare function SlamComponent<T>(arg: (args: T) => SlamElement<TagName>): (args: T) => SlamElement<TagName>;
declare function SlamStyledComponent<T extends ChildlessElements>(tag: T, styles: CSSObject): (arg1?: TagAttributes<T>) => SlamElement<T>;
declare function SlamStyledComponent<T extends ParentalElements>(tag: T, styles: CSSObject): (arg1?: TagAttributes<T> | Child, ...arg2: Child[]) => SlamElement<T>;
declare function StartSlamServer(indexFile: string, port: number, watchList: string[]): Promise<void>;
declare function writeFiles(indexFile: string, outDir: string): Promise<void>;
export declare const Slam: {
    styles: typeof SlamStyles;
    page: typeof SlamPage;
    pageBuilder: typeof SlamPageBuilder;
    component: typeof SlamComponent;
    styledComponent: typeof SlamStyledComponent;
    startServer: typeof StartSlamServer;
    writeFiles: typeof writeFiles;
};
export {};
