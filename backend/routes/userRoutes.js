import express from "express";
import {
  UserController,
  // UserProfiles,
  RegisterUser,
  // UpdateUserProfile,
  // userSession,
  // retrieveAllOrders,
} from "../controllers/userController.js";
import { Authorization } from "../middleware/authMiddleWare.js";

const router = express.Router();

router.post("/login", UserController);
router.post("/", RegisterUser);

//router.route("/login").get(Authorization, userSession);
//router.route("/").put(Authorization, UpdateUserProfile);

//router.route("/profile").get(Authorization, UserProfiles);

//router.route("/orders").get(Authorization, retrieveAllOrders);

export default router;
