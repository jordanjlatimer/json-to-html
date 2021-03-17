import { ElementAttributes } from "./baseInterface";
export declare const toKebabCase: (value: string) => string;
export declare function noChildren(tag: string): boolean;
export declare function parseAtts<T extends ElementAttributes>(atts: T): string;
interface GenericObject {
    [key: string]: any;
}
export declare function equalObjects(object1: GenericObject, object2: GenericObject): boolean;
export {};
