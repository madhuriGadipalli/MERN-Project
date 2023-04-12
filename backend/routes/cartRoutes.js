import express from "express";
import { addToCart, cartPage } from "../controllers/addToCartController.js";
import { Authorization } from "../middleware/authMiddleWare.js";

const router = express.Router();

router.post("/prodId=:id/qty=:qty", addToCart);
router.route("/").get(Authorization, cartPage);

export default router;
