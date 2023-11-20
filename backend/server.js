import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import connectDb from "./config/db.js";
import products from "./model/products.js";
//import products from "./data/products.js";
//import products from "./products.json" assert { type: "json" };
//const express = require("express");
import ProductRoutes from "./routes/productRoutes.js";
import UserRoutes from "./routes/userRoutes.js";
import AddToCartRoutes from "./routes/cartRoutes.js";
import ShippingRoutes from "./routes/ShippingRoutes.js";
import OrderRoutes from "./routes/orderRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandling.js";

dotenv.config();
const app = express();

// let itemsAddedToCart = [];

connectDb();
app.use(cors());
app.use(express.json());

app.use("/api/products", ProductRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/cart", AddToCartRoutes);
app.use("/api/shipping", ShippingRoutes);
app.use("/api/order", OrderRoutes);
app.get("/paypal/secretKey", (req, res) => {
  res.send(process.env.PAYPAY_SECRET_KEY);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get(
    "*",
    (req, res) => res,
    sedndFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (Req, res) => {
    res.send("API is running");
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(4008, console.log(`server is running on 4008`.yellow.bold));
