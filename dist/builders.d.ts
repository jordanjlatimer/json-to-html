import { Page } from "./slamInterfaces";
export declare function buildPage(page: Page, content: any): {
    html: string;
    css: string;
    js: string;
};
export declare function buildFiles(indexFile: string, outDir: string): Promise<void>;
