/// <reference types="express" />
import { Request, Response } from "express";
import { API } from "./api";
export declare const AuthorCreate: API;
export declare const AuthorUpdate: API;
export declare const AuthorDelete: API;
export declare const AuthorList: (req: Request, res: Response) => void;
export declare const AuthorDetail: (req: Request, res: Response) => void;
