import JWT from "jsonwebtoken";
import asyncHandler from "express-async-handler";

export const JWT_Token = (id) => {
  return JWT.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
