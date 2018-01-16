import { Router } from "express";
import { AuthorCreate, AuthorUpdate, AuthorDelete, AuthorList, AuthorDetail } from "../controllers/author.controller";

export const authorRoute: Router = Router();

authorRoute.get("/", AuthorList);
authorRoute.get("/:id/", AuthorDetail);

authorRoute.get("/create", AuthorCreate.get);
authorRoute.post("/create", AuthorCreate.post);

authorRoute.get("/:id/update", AuthorUpdate.get);
authorRoute.post("/update", AuthorUpdate.post);

authorRoute.get("/:id/delete", AuthorDelete.get);
authorRoute.post("/:id/delete", AuthorDelete.post);
