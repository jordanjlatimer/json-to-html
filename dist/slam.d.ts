import { startServer } from "./server";
import { ChildlessElementFunction, ChildlessElements, CSSObject, Page, ParentalElementFunction, ParentalElements, SiteMap, SlamElement, TagName } from "./slamInterfaces";
declare function SlamPage(arg: Page): Page;
declare function SlamPageBuilder(builderFunction: () => SiteMap | Promise<SiteMap>): () => SiteMap | Promise<SiteMap>;
export declare function StyledComponent<T extends TagName>(func: () => SlamElement<T>, ...styles: (CSSObject | CSSObject[] | undefined)[]): () => SlamElement<T>;
export declare function StyledComponent<T extends TagName, U extends any[]>(func: (...args: U) => SlamElement<T>, ...styles: (CSSObject | CSSObject[] | undefined)[]): (...args: U) => SlamElement<T>;
declare function StyledElement<T extends ParentalElements>(element: ParentalElementFunction<T>, ...styles: (CSSObject | CSSObject[] | undefined)[]): ParentalElementFunction<T>;
declare function StyledElement<T extends ChildlessElements>(element: ChildlessElementFunction<T>, ...styles: (CSSObject | CSSObject[] | undefined)[]): ChildlessElementFunction<T>;
declare function StyledElement<T extends TagName>(element: SlamElement<T>, ...styles: (CSSObject | CSSObject[] | undefined)[]): SlamElement<T>;
declare function CreateStyleApplier(styles: CSSObject): <T extends ParentalElements>(element: SlamElement<T>) => SlamElement<T>;
declare function CreateStyleApplier(styles: CSSObject, childless: true): <T extends ChildlessElements>(element: SlamElement<T>) => SlamElement<T>;
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
    serve: typeof startServer;
    write: typeof writeFiles;
};
export {};
