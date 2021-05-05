/// <reference types="node" />
import * as express from "express";
import { Socket } from "node:net";
import { PageRoute } from "./slamInterfaces";
export declare function clearCache(module?: NodeModule): void;
export declare function cacheContent(routes: PageRoute[], cache: Record<string, any>): Promise<void>;
export declare function addCssResetRoute(server: express.Application): void;
export declare function addPageRoutes(routes: PageRoute[], cache: Record<string, any>, server: express.Application, port: number, lastUpdate: number): void;
export declare function startListening(routes: PageRoute[], server: express.Application, port: number, clearConsole?: boolean): import("http").Server;
export declare function buildWebserver(indexFile: string, port: number, cache: Record<string, any>, sockets: Socket[], contentOut?: string, clearConsole?: boolean): Promise<import("http").Server>;
export declare function startServer(indexFile: string, port: number, watchList: string[], contentOut?: string, clearConsole?: boolean): Promise<void>;
