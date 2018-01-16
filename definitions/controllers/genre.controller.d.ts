/// <reference types="express" />
import { Request, Response } from "express";
import { API } from "./api";
export declare const GenreCreate: API;
export declare const GenreUpdate: API;
export declare const GenreDelete: API;
export declare const GenreList: (req: Request, res: Response) => void;
export declare const GenreDetail: (req: Request, res: Response) => void;
