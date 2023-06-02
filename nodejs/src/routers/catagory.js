import express from "express";
import { create } from "../controllers/category";

const router = express.Router();

router.post("/categorys", create);





export default router;