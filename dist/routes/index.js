"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
exports.index = express_1.Router();
exports.index.get("/", function (req, res) {
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
