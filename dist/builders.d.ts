import { SlamElement, Child, SlamComponent } from "./baseInterfaces";
interface Indentification {
    [key: number]: SlamComponent[];
}
export declare const identifyComponents: (tree: SlamElement) => Indentification;
export declare const buildHtmlFromObject: (tree: Child, components: Indentification) => string;
export {};
