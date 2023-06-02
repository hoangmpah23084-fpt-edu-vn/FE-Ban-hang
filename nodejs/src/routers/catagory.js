import express from "express";
import { create, getOne, update } from "../controllers/category";

const router = express.Router();

router.post("/categorys", create);
router.patch("/categorys/:id", update);
router.get("/categorys/:id", getOne);





export default router;