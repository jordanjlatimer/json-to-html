/// <reference types="node" />
import { Child, SlamElement, Page, TagName, TagAttributes } from "./slamInterfaces";
import { Server } from "node:http";
export declare function buildSlamElementObject<T extends TagName>(tag: T, arg1?: Child | TagAttributes<T>, arg2?: Child[]): SlamElement<T>;
export declare function buildPage(page: Page, content: any): {
    html: string;
    css: string;
    js: string;
};
export declare function buildReloadScript(port: number): string;
export declare function buildWebserver(indexFile: string, cache: Record<string, any>, port: number): Promise<Server>;
