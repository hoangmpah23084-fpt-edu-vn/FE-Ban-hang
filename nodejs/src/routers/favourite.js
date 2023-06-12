import express from "express";
import { checkfavourite, favouriteCreat, getFavourites, removeFavourite } from "../controllers/favourite";

const router = express.Router();


router.post('/favourite', favouriteCreat)
router.get('/favourite/:user_id', getFavourites)
router.delete('/favourite/remove/:user_id/:product_id', removeFavourite)
router.get('/favourite/check/:productId/user/:userId', checkfavourite)

export default router