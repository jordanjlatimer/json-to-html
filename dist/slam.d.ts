import { CSSObject, Page, SlamElement, TagName, ChildlessElements, ChildlessElementFunction, ParentalElements, ParentalElementFunction } from "./slamInterfaces";
declare function SlamPage<T>(arg: (args: T) => SlamElement<"html">): (args: T) => SlamElement<"html">;
declare function SlamPageBuilder(builderFunction: () => Array<Page | Promise<Page>> | Promise<Array<Page | Promise<Page>>>): () => Array<Page | Promise<Page>> | Promise<Array<Page | Promise<Page>>>;
export declare function StyledComponent<T extends TagName>(func: () => SlamElement<T>, ...styles: (CSSObject | CSSObject[] | undefined)[]): () => SlamElement<T>;
export declare function StyledComponent<T extends TagName, U>(func: (params: U) => SlamElement<T>, ...styles: (CSSObject | CSSObject[] | undefined)[]): (params: U) => SlamElement<T>;
declare function StyledElement<T extends ParentalElements>(element: ParentalElementFunction<T>, ...styles: (CSSObject | CSSObject[] | undefined)[]): ParentalElementFunction<T>;
declare function StyledElement<T extends ChildlessElements>(element: ChildlessElementFunction<T>, ...styles: (CSSObject | CSSObject[] | undefined)[]): ChildlessElementFunction<T>;
declare function StyledElement<T extends TagName>(element: SlamElement<T>, ...styles: (CSSObject | CSSObject[] | undefined)[]): SlamElement<T>;
declare function CreateStyleApplier(styles: CSSObject): <T extends ParentalElements>(element: SlamElement<T>) => SlamElement<T>;
declare function CreateStyleApplier(styles: CSSObject, childless: true): <T extends ChildlessElements>(element: SlamElement<T>) => SlamElement<T>;
declare function StartSlamServer(indexFile: string, port: number, watchList: string[], contentOut?: string): Promise<void>;
declare function writeFiles(indexFile: string, outDir: string): Promise<void>;
declare function mergeStyles(...styles: CSSObject[]): CSSObject;
export declare const Slam: {
    page: typeof SlamPage;
    build: typeof SlamPageBuilder;
    applier: typeof CreateStyleApplier;
    merge: typeof mergeStyles;
    styled: {
        element: typeof StyledElement;
        component: typeof StyledComponent;
    };
    serve: typeof StartSlamServer;
    write: typeof writeFiles;
};
export {};
