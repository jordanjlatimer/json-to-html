import { ElementAttributes, Child, SlamElement } from "./slamInterfaces";
export declare function toKebabCase(value: string): string;
export declare function isChildless(tag: string): boolean;
export declare function buildAttsString<T extends ElementAttributes>(atts: T): string;
interface GenericObject {
    [key: string]: any;
}
export declare function areEqualObjects(object1: GenericObject, object2: GenericObject): boolean;
export declare function buildSlamElement<T>(arg1: Child | T, arg2: Child[], atts: T | undefined, tag: string): SlamElement;
export {};
