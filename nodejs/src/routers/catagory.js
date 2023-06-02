import express from "express";
import { create, getAll, getOne, update } from "../controllers/category";

const router = express.Router();

router.post("/categorys", create);
router.patch("/categorys/:id", update);
router.get("/categorys/:id", getOne);
router.get("/categorys", getAll);






export default router;