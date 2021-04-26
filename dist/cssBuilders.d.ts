import { CSSObject, Identification } from "./slamInterfaces";
import { Properties as CSSProperties } from "csstype";
export declare function buildPropertiesString(styles: CSSProperties): string;
export declare function buildSelectorString(className: string, properties: string): string;
export declare function buildMediaQueryString(className: string, query: string, styleObject: CSSObject): string;
export declare function buildCssFromObject(className: string, styles: CSSObject, isKeyframe?: boolean): string;
export declare function buildPageCssString(components: Identification, globalStyles?: CSSObject | CSSObject[]): string;
