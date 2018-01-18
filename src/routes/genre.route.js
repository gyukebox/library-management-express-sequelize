const Genre = require("../controllers/genre.controller");
const express = require("express");

const router = express.Router();

router.get("/", Genre.list);
router.get("/:id", Genre.detail);

router.get("/create", Genre.create.GET);
router.post("/create", Genre.create.POST);

router.get("/:id/update", Genre.update.GET);
router.post("/:id/update", Genre.update.POST);

router.get("/:id/delete", Genre.delete.GET);
router.post("/:id/delete", Genre.delete.POST);

module.exports = router;