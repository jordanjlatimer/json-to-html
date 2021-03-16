import { TypedSlamElement, Child, TypedSlamComponent } from "./baseInterfaces";
interface Indentification {
    [key: number]: TypedSlamComponent[];
}
export declare const identifyComponents: (tree: TypedSlamElement) => Indentification;
export declare const buildHtmlFromObject: (tree: Child, components: Indentification) => string;
export {};
