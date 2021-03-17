/// <reference types="node" />
import * as path from "path";
import { Server } from "node:http";
import { Socket } from "node:net";
export declare const CreateSlamServer: (pages: {
    name: string;
    path: string;
}[], port: number, watchList: string[]) => {
    pages: {
        name: string;
        path: string;
    }[];
    port: number;
    sockets: Socket[];
    webServer: Server;
    buildWebserver: () => void;
    start: () => void;
};
