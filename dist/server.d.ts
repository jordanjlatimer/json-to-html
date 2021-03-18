import * as path from "path";
export declare const CreateSlamServer: (pages: {
    name: string;
    path: string;
}[], port: number, watchList: string[]) => {
    start: () => Promise<void>;
};
