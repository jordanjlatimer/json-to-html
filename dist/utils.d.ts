import { ElementAttributes, Child, SlamElement } from "./slamInterfaces";
export declare const toKebabCase: (value: string) => string;
export declare function noChildren(tag: string): boolean;
export declare function parseAtts<T extends ElementAttributes>(atts: T): string;
interface GenericObject {
    [key: string]: any;
}
export declare function equalObjects(object1: GenericObject, object2: GenericObject): boolean;
export declare function typeTag<T>(arg1: Child | T, arg2: Child[], atts: T | undefined, tag: string): SlamElement;
export {};
