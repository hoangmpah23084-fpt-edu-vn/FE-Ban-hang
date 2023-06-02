import express from "express";
import { create, update } from "../controllers/category";

const router = express.Router();

router.post("/categorys", create);
router.put("/categorys/:id", update);






export default router;