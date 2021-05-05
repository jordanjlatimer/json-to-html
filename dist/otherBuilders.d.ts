import { Child, PageRoute, SiteMap, SlamElement, TagAttributes, TagName } from "./slamInterfaces";
export declare function buildSlamElement<T extends TagName>(tag: T, arg1?: Child | TagAttributes<T> | Child[], arg2?: (Child | Child[])[]): SlamElement<T>;
export declare function buildPageRoutes(tree: SiteMap, path: string, parentKey: string): PageRoute[];
export declare function buildPage(route: PageRoute, content: any): {
    html: string;
    css: string;
    js: string;
};
export declare function buildReloadScript(port: number): string;
