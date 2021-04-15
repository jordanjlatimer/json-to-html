import { CSSObject, Page, SlamElement, TagAttributes, TagName, Child } from "./slamInterfaces";
declare function SlamPage<T>(arg: (args: T) => SlamElement<"html">): (args: T) => SlamElement<"html">;
declare function SlamPageBuilder(builderFunction: () => Array<Page | Promise<Page>> | Promise<Array<Page | Promise<Page>>>): () => Array<Page | Promise<Page>> | Promise<Array<Page | Promise<Page>>>;
declare function SlamComponent(arg: () => SlamElement<TagName>): () => SlamElement<TagName>;
declare function SlamComponent<T>(arg: (args: T) => SlamElement<TagName>): (args: T) => SlamElement<TagName>;
declare function SlamStyledElement<T extends TagName>(elem: () => SlamElement<T>, styles: CSSObject): ((arg1?: TagAttributes<T> | undefined) => SlamElement<T>) | ((arg1?: Child | TagAttributes<T> | undefined, ...arg2: Child[]) => SlamElement<T>);
declare function StartSlamServer(indexFile: string, port: number, watchList: string[]): Promise<void>;
declare function writeFiles(indexFile: string, outDir: string): Promise<void>;
export declare const Slam: {
    page: typeof SlamPage;
    pageBuilder: typeof SlamPageBuilder;
    component: typeof SlamComponent;
    styledElement: typeof SlamStyledElement;
    startServer: typeof StartSlamServer;
    writeFiles: typeof writeFiles;
};
export {};
