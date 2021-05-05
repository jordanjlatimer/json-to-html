import { Child, Identification, SlamElement, TagName } from "./slamInterfaces";
export declare function buildAtts<T extends SlamElement<TagName>["atts"]>(atts: T): string;
export declare function buildHtml(tree: Child, components: Identification): string;
