import express from "express";
import { create, getAll, getOne, update } from "../controllers/product";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router();

router.post("/products",checkPermission, create);
router.get("/products",getAll)
router.patch("/products/:id",checkPermission ,update);
router.get("/products/:id", checkPermission,getOne);





export default router;