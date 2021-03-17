import { SlamElement, Child, Identification } from "./slamInterfaces";
export declare const identifyComponents: (tree: SlamElement) => Identification;
export declare const buildHtmlFromObject: (tree: Child, components: Identification) => string;
