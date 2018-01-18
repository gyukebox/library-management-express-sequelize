const Instance = require("../controllers/bookinstance.controller");
const express = require("express");

const router = express.Router();

router.get("/", Instance.list);
router.get("/:id", Instance.detail);

router.get("/create", Instance.create.GET);
router.post("/create", Instance.create.POST);

router.get("/:id/update", Instance.update.GET);
router.post("/:id/update", Instance.update.POST);

router.get("/:id/delete", Instance.delete.GET);
router.post("/:id/delete", Instance.delete.POST);

module.exports = router;