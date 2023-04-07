import express from "express";
import asyncHandler from "express-async-handler";
import Products from "../model/products.js";
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";
const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
