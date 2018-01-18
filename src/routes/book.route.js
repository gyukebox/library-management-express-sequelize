const Book = require("../controllers/book.controller");
const express = require("express");

const router = express.Router();

router.get("/", Book.list);
router.get("/:id", Book.detail);

router.get("/create", Book.create.GET);
router.post("/create", Book.create.POST);

router.get("/:id/update", Book.update.GET);
router.post("/:id/update", Book.update.POST);

router.get("/:id/delete", Book.delete.GET);
router.post("/:id/delete", Book.delete.POST);

module.exports = router;