import express from "express";
import { create, getAll, getOne, update } from "../controllers/category";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router();

router.post("/categorys",checkPermission, create);
router.patch("/categorys/:id", update);
router.get("/categorys/:id", getOne);
router.get("/categorys", getAll);






export default router;