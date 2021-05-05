import { Properties as CSSProperties } from "csstype";
import { CSSObject, Identification } from "./slamInterfaces";
export declare function buildProperties(styles: CSSProperties): string;
export declare function buildSelector(className: string, properties: string): string;
export declare function buildMediaQuery(className: string, query: string, styleObject: CSSObject): string;
export declare function buildCss(className: string, styles: CSSObject, isKeyframe?: boolean): string;
export declare function buildPageCss(components: Identification, globalStyles?: CSSObject | CSSObject[]): string;
