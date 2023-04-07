import asyncHandler from "express-async-handler";
import Products from "../model/products.js";

//@desc fetch all products
//@Route GET/api/products
//@access public
export const getProducts = asyncHandler(async (req, res) => {
  const productsData = await Products.find({});
  res.status(200).json(productsData);
});

//@desc fetch single product
//@Route GET/api/products/:id
//@access public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});
