import asyncHandler from "express-async-handler";
import ShippingAddress from "../model/shippingAddressModel.js";

export const shippingAddress = asyncHandler(async (req, res) => {
  const { address, city, country, postalCode } = req.body;

  const result = await ShippingAddress.create({
    address,
    city,
    country,
    postalCode,
  });

  res.send(result);
});
