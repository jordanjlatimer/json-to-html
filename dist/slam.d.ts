import { CSSObject, Page, SlamElement, TagName, ChildlessElements, ChildlessElementFunction, ParentalElements, ParentalElementFunction } from "./slamInterfaces";
declare function SlamPage<T>(arg: (args: T) => SlamElement<"html">): (args: T) => SlamElement<"html">;
declare function SlamPageBuilder(builderFunction: () => Array<Page | Promise<Page>> | Promise<Array<Page | Promise<Page>>>): () => Array<Page | Promise<Page>> | Promise<Array<Page | Promise<Page>>>;
declare function StyledElement<T extends ParentalElements>(element: ParentalElementFunction<T>, ...styles: (CSSObject | CSSObject[])[]): ParentalElementFunction<T>;
declare function StyledElement<T extends ChildlessElements>(element: ChildlessElementFunction<T>, ...styles: (CSSObject | CSSObject[])[]): ChildlessElementFunction<T>;
declare function StyledElement<T extends TagName>(element: SlamElement<T>, ...styles: (CSSObject | CSSObject[])[]): SlamElement<T>;
declare function CreateStyleApplier(styles: CSSObject): <T extends ParentalElements>(element: SlamElement<T>) => SlamElement<T>;
declare function CreateStyleApplier(styles: CSSObject, childless: true): <T extends ChildlessElements>(element: SlamElement<T>) => SlamElement<T>;
declare function StartSlamServer(indexFile: string, port: number, watchList: string[], contentOut?: string): Promise<void>;
declare function writeFiles(indexFile: string, outDir: string): Promise<void>;
export declare const Slam: {
    page: typeof SlamPage;
    pageBuilder: typeof SlamPageBuilder;
    applier: typeof CreateStyleApplier;
    styled: typeof StyledElement;
    startServer: typeof StartSlamServer;
    writeFiles: typeof writeFiles;
};
export {};
