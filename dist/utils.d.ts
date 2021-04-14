/// <reference types="node" />
import { Child, SlamElement, Identification, TagName } from "./slamInterfaces";
export declare function toKebabCase(value: string): string;
export declare function isPresentAtt(attName: string): boolean;
export declare function isChildless(tag: TagName): boolean;
interface GenericObject {
    [key: string]: any;
}
export declare function areEqualObjects(object1: GenericObject, object2: GenericObject): boolean;
export declare function collectElementsWithCss(tree: Child): SlamElement<TagName>[];
export declare function determineSimilarElementsByCss(array: SlamElement<TagName>[]): Identification;
export declare function clearCache(module: NodeModule): void;
export {};
