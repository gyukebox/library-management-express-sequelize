import { Router } from "express";
import { BookCreate, BookUpdate, BookDelete, BookList, BookDetail } from "../controllers/book.controller";

export const bookRoute: Router = Router();

bookRoute.get("/", BookList);
bookRoute.get("/:id/", BookDetail);

bookRoute.get("/create", BookCreate.get);
bookRoute.post("/create", BookCreate.post);

bookRoute.get("/:id/update", BookUpdate.get);
bookRoute.post("/:id/update", BookUpdate.post);

bookRoute.get("/:id/delete", BookDelete.get);
bookRoute.post("/:id/delete", BookDelete.post);
