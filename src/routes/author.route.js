const Author = require("../controllers/author.controller");
const express = require("express");

const router = express.Router();

router.get("/", Author.list);
router.get("/:id", Author.detail);

router.get("/create", Author.create.GET);
router.post("/create", Author.create.POST);

router.get("/:id/update", Author.update.GET);
router.post("/:id/update", Author.update.POST);

router.get("/:id/delete", Author.delete.GET);
router.post("/:id/delete", Author.delete.POST);

module.exports = router;