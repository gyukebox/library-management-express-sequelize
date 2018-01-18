const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
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

module.exports = router;
