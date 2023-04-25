import asyncHandler from "express-async-handler";
import Cart from "../model/cartModel.js";
import Product from "../model/products.js";
import itemsAddedToCart from "../model/cartModel.js";
import mongoose from "mongoose";

export const addToCart = asyncHandler(async (req, res) => {
  const { id, qty } = req.params;

  // console.log("userrr", req.user);

  const product = await Product.findById(id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  const result = await itemsAddedToCart.findOneAndUpdate(
    { _id: req.params.id },
    { $set: product, quantity: qty, user: req.user._id },
    { upsert: true, new: true }
  );

  // console.log("itemsAddedToCart", result);

  res.send(result);
});

export const cartPage = asyncHandler(async (req, res) => {
  const user = req.user._id;
  const cartData = await itemsAddedToCart.find({ user });
  console.log("cartpage", cartData);
  res.status(200).json(cartData);
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const updatedCartData = await itemsAddedToCart.findOneAndDelete({
    _id: req.params.id,
  });
  // console.log("deletedsuccess", updatedCartData);
  res.status(200).json("deleted success fully");
});
