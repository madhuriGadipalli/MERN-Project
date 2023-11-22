import express from "express";
import { shippingAddress } from "../controllers/shippingController.js";
import { Authorization } from "../middleware/authMiddleWare.js";

const router = express.Router();

router.post("/", shippingAddress);

export default router;
