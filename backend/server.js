import express from "express";

//import products from "./data/products.js";
import products from "./products.json" assert { type: "json" };
const express = require("express");

const app = express();



app.get("/api/products", (req, res) => {
 
  if (products) {
        res.send(products);
  } else {
    res.send("No Products found");
  }
});



app.listen(5000, console.log(`server is running on 5000`));
