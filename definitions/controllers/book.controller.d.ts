/// <reference types="express" />
import { Request, Response } from "express";
import { API } from "./api";
export declare const BookCreate: API;
export declare const BookUpdate: API;
export declare const BookDelete: API;
export declare const BookList: (req: Request, res: Response) => void;
export declare const BookDetail: (req: Request, res: Response) => void;
