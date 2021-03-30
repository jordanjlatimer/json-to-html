import { Page } from "./slamInterfaces";
export declare const buildPage: (page: Page) => {
    html: string;
    css: string;
    js: string;
};
export declare function BuildFiles(indexFile: string, outDir: string): Promise<void>;
