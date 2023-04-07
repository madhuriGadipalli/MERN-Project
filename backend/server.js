import express from "express";
import ProductRoutes from "./routes/productRoutes.js";

const express = require("express");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", ProductRoutes);



app.listen(5000, console.log(`server is running on 5000`));
