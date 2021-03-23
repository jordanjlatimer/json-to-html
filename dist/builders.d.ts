import { Identification, ResolvedChild, SlamElement } from "./slamInterfaces";
export declare const identifyCssElements: (tree: SlamElement) => Identification;
export declare const buildHtmlFromObject: (tree: ResolvedChild, cssElements: Identification) => string;
