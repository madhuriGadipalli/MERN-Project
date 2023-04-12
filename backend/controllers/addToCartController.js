import asyncHandler from "express-async-handler";
import Cart from "../model/cartModel.js";
import Product from "../model/products.js";
import itemsAddedToCart from "../model/cartModel.js";

export const addToCart = asyncHandler(async (req, res) => {
  const { id, qty } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  const result = await itemsAddedToCart.findOneAndUpdate(
    { _id: req.params.id },
    { $set: product, quantity: qty },
    { upsert: true, new: true }
  );

  console.log("itemsAddedToCart", result);

  res.send(result);
});

export const cartPage = asyncHandler(async (req, res) => {
  const cartData = await itemsAddedToCart.find({});
  res.status(200).json(cartData);
});
