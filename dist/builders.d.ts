import { Identification, ResolvedChild, ResolvedSlamElement } from "./slamInterfaces";
export declare const identifyComponents: (tree: ResolvedSlamElement) => Identification;
export declare const buildHtmlFromObject: (tree: ResolvedChild, components: Identification) => string;
