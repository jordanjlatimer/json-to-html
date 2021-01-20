declare function noChildren(tag: string): boolean;
declare function parseAtts(atts: { [key: string]: string }): string;
declare function genElemString(
  arg1: string,
  arg2?:
    | {
        [key: string]: string;
      }
    | string[]
    | string,
  arg3?: string[] | string
): string;
export { noChildren, parseAtts, genElemString };
