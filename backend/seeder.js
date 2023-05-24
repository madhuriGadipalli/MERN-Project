import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import userData from "./data/user.js";
import productData from "./data/products.js";
import User from "./model/user.js";
import Orders from "./model/orderDetails.js";
import Products from "./model/products.js";
import addToCart from "./model/cartModel.js";
import cartData from "./data/cart.js";
import connectDb from "./config/db.js";

dotenv.config();

connectDb();

const importData = async () => {
  try {
    // await User.deleteMany();
    await Orders.deleteMany();
    await Products.deleteMany();

    // const savedUsers = await User.insertMany(userData);
    const savedUsers = await User.find({});
    const adminUser = savedUsers[0]._id;
    const updatedProducts = productData.map((product) => {
      return { ...product, user: adminUser };
    });

    Products.insertMany(updatedProducts);

    console.log("imported successfully".green);
  } catch (error) {
    console.log(`import failed:${error}`.red);
  }
};

const destroyData = async () => {
  try {
    // await User.deleteMany();
    await Orders.deleteMany();
    // await Products.deleteMany();

    console.log("destroy data successfully".green);
  } catch (error) {
    console.log(`destroy data error:${error}`.red);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
