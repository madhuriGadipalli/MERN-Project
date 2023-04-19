import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "User",
    },
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
    },
    brand: {
      type: String,
    },
    Category: {
      type: String,
    },
    CountInStock: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    numReviews: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
  },

  {
    timeStamps: true,
  }
);

const CartItems = mongoose.model("CartItems", cartSchema);
export default CartItems;
