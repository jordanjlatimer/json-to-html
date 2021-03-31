/// <reference types="node" />
import { Child, SlamElement, Page } from "./slamInterfaces";
import { Server } from "node:http";
export declare function buildSlamElementObject<T>(arg1: Child | T, arg2: Child[], atts: T | undefined, tag: string): SlamElement;
export declare function buildPage(page: Page, content: any): {
    html: string;
    css: string;
    js: string;
};
export declare function buildFiles(indexFile: string, outDir: string): Promise<void>;
export declare function buildReloadScript(port: number): string;
export declare function buildWebserver(indexFile: string, cache: Record<string, any>, port: number): Promise<Server>;
