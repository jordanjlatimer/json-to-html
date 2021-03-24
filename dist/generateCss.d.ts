import { CSSObject } from "./slamInterfaces";
export declare const buildCssFromObject: (className: string, styles: CSSObject, isKeyframe?: boolean | undefined) => string;
export declare const CSS: <T extends Record<string, CSSObject>>(arg: T) => T;
