import asyncHandler from "express-async-handler";
import User from "../model/user.js";
import JWT from "jsonwebtoken";

export const Authorization = asyncHandler(async (req, res, next) => {
  const authToken = req.headers.authorization;
  let token;
  console.log("authToken", authToken);
  if (authToken && authToken.startsWith("Bearer")) {
    try {
      token = authToken.split(" ")[1];
      const decodedToken = JWT.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decodedToken.id).select("-password");
      next();
    } catch (err) {
      //throw new Error(` ${err} not authorized`);
      next(err);
    }
  } else {
    res.status(201);
    next(new Error("not authorized"));
  }
});
