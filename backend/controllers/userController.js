import Express from "express";
import asyncHandler from "express-async-handler";
import User from "../model/user.js";
import { JWT_Token } from "../utils/auth.js";

export const UserController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const userExists = await User.findOne({ email });
  console.log("loginnn", userExists);
  if (userExists && (await userExists.matchPassword(password))) {
    console.log("loginnn", userExists);
    res.json({
      name: userExists.name,
      email: userExists.email,
      password: userExists.password,
      id: userExists._id,
      isAdmin: userExists.isAdmin,
      token: JWT_Token(userExists._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid username or password");
  }
});


