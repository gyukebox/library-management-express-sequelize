import { Router } from "express";
import { GenreCreate, GenreUpdate, GenreDelete, GenreList, GenreDetail } from "../controllers/genre.controller";

export const genreRoute: Router = Router();

genreRoute.get("/", GenreList);
genreRoute.get("/:id/", GenreDetail);

genreRoute.get("/create", GenreCreate.get);
genreRoute.post("/create", GenreCreate.post);

genreRoute.get("/:id/update", GenreUpdate.get);
genreRoute.post("/:id/update", GenreUpdate.post);

genreRoute.get("/:id/delete", GenreDelete.get);
genreRoute.post("/:id/delete", GenreDelete.post);
