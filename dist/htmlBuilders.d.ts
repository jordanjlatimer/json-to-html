import { Identification, Child, SlamElement, TagName } from "./slamInterfaces";
export declare function buildAttsString<T extends SlamElement<TagName>["atts"]>(atts: T): string;
export declare function buildElementAndChildrenStrings(tree: SlamElement<TagName> | string, components: Identification, className?: string): string;
export declare function buildPageHtmlString(tree: Child, components: Identification): string;
