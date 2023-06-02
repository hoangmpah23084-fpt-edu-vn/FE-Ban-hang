import express from "express";
import { create, getAll, getOne, update } from "../controllers/product";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router();

router.post("/products", create);
router.get("/products", getAll)
router.patch("/products/:id", update);
router.get("/products/:id", getOne);





export default router;