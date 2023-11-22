import express from "express";
import {
  orderDetails,
  getOrderById,
  updateOrderToPaid,
} from "../controllers/orderController.js";
import { Authorization } from "../middleware/authMiddleWare.js";

const router = express.Router();

router.route("/").post(Authorization, orderDetails);
router.route("/:id").get(Authorization, getOrderById);
router.route("/:id/pay").put(Authorization, updateOrderToPaid);

export default router;
