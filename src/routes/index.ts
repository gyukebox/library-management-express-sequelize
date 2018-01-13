import { Request, Response } from "express";

export let index = (req: Request, res: Response) => {
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
};
