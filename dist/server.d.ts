/// <reference types="node" />
import * as express from "express";
import { Socket } from "node:net";
import { BuildObject, Cache, PageRoute } from "./slamInterfaces";
export declare function clearNodeCache(module: NodeModule): void;
export declare function cacheRouteContent(route: PageRoute, cache: Cache): Promise<void>;
export declare function cacheRouteBuild(route: PageRoute, build: BuildObject, cache: Cache): Promise<void>;
export declare function addCssResetRoute(server: express.Application): void;
export declare function addSitemapRoute(server: express.Application, routes: PageRoute[]): void;
export declare function addLastUpdateRoute(server: express.Application, lastUpdate: number): void;
export declare function addPageRoute(route: PageRoute, cache: Cache, server: express.Application, port: number): void;
export declare function startListening(routes: PageRoute[], server: express.Application, port: number, sockets: Socket[], lastUpdate: number, cache: Cache, clearConsole?: boolean, contentOut?: string): import("http").Server;
export declare function buildWebserver(indexFile: string, port: number, cache: Cache, sockets: Socket[], contentOut?: string, clearConsole?: boolean): Promise<import("http").Server>;
export declare function startServer(indexFile: string, port: number, watchList: string[], contentOut?: string, clearConsole?: boolean): Promise<void>;
