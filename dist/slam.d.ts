import { CSSObject, Page, SlamElement, TagAttributes, TagName, Child } from "./slamInterfaces";
declare function SlamPage<T>(arg: (args: T) => SlamElement<"html">): (args: T) => SlamElement<"html">;
declare function SlamPageBuilder(builderFunction: () => Array<Page | Promise<Page>> | Promise<Array<Page | Promise<Page>>>): () => Array<Page | Promise<Page>> | Promise<Array<Page | Promise<Page>>>;
declare function SlamComponent(arg: () => SlamElement<TagName>): () => SlamElement<TagName>;
declare function SlamComponent<T>(arg: (args: T) => SlamElement<TagName>): (args: T) => SlamElement<TagName>;
declare function SlamStyledElement<U extends TagName>(element: SlamElement<U>, styles: CSSObject): ((arg1?: TagAttributes<U> | undefined) => SlamElement<U>) | ((arg1?: Child | TagAttributes<U> | undefined, ...arg2: Child[]) => SlamElement<U>);
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
