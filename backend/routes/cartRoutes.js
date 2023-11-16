import express from "express";
import {
  addToCart,
  cartPage,
  deleteProduct,
} from "../controllers/addToCartController.js";
import { Authorization } from "../middleware/authMiddleWare.js";

const router = express.Router();

router.route("/prodId=:id/qty=:qty").post(Authorization, addToCart);
router.route("/").get(Authorization, cartPage);
router.route("/prodId=:id").delete(deleteProduct);

export default router;
