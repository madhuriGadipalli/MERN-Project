import mongoose from "mongoose";

const shippingAddressSchema = mongoose.Schema(
  {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  {
    timeStamps: true,
  }
);

const ShippingAddress = mongoose.model(
  "ShippingAddress",
  shippingAddressSchema
);

export default ShippingAddress;
