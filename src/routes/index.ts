import { Request, Response, Router } from "express";

export const index: Router = Router();

index.get("/", (req: Request, res: Response) => {
  res.json({
    page: {
      name: "index",
      description: "API root",
    },
    catalog: {
      books: "/books",
      authors: "/authors",
      bookinstances: "/bookinstances",
      genres: "/genres",
    },
  });
});
