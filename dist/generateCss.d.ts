import { CSSObject } from "./slamInterfaces";
export declare function buildCssFromObject(className: string, styles: CSSObject, isKeyframe?: boolean): string;
export declare function CSS<T extends Record<string, CSSObject>>(arg: T): T;
