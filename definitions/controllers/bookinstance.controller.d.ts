/// <reference types="express" />
import { Request, Response } from "express";
import { API } from "./api";
export declare const InstanceCreate: API;
export declare const InstanceUpdate: API;
export declare const InstanceDelete: API;
export declare const InstanceList: (req: Request, res: Response) => void;
export declare const InstanceDetail: (req: Request, res: Response) => void;
