declare function noChildren(tag: string): boolean;
declare function parseAtts<T>(atts: T): string;
declare function genElemString<T>(arg1: string, arg2?: T | string[] | string, arg3?: string[] | string): string;
export { noChildren, parseAtts, genElemString };
