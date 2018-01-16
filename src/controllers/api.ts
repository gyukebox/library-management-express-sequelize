import { Request, Response } from "express";

export interface API {
  get: (req: Request, res: Response) => void;
  post: (req: Request, res: Response) => void;
}
