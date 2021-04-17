/// <reference types="node" />
import { Child, SlamElement, Identification, TagName, ChildlessElements, CSSObject } from "./slamInterfaces";
export declare function toKebabCase(value: string): string;
export declare function isPresentAtt(attName: string): boolean;
export declare function isChildless(tag: TagName): tag is ChildlessElements;
interface GenericObject {
    [key: string]: any;
}
export declare function areEqualObjects(object1: GenericObject, object2: GenericObject): boolean;
export declare function collectElementsWithCss(tree: Child): SlamElement<TagName>[];
export declare function determineSimilarElementsByCss(array: SlamElement<TagName>[]): Identification;
export declare function clearCache(module: NodeModule): void;
export declare function deepStyleMerge(...objs: any[]): CSSObject;
export {};
