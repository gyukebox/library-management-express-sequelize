import { Router } from "express";
import { InstanceCreate, InstanceUpdate, InstanceDelete, InstanceList, InstanceDetail } from "../controllers/bookinstance.controller";

export const instanceRoute: Router = Router();

instanceRoute.get("/", InstanceList);
instanceRoute.get("/:id/", InstanceDetail);

instanceRoute.get("/create", InstanceCreate.get);
instanceRoute.post("/create", InstanceCreate.post);

instanceRoute.get("/:id/update", InstanceUpdate.get);
instanceRoute.post("/:id/update", InstanceUpdate.post);

instanceRoute.get("/:id/delete", InstanceDelete.get);
instanceRoute.post("/:id/delete", InstanceDelete.post);

