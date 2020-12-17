const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Product = mongoose.model("Product");

const router = express.Router();

router.use(requireAuth);

router.get("/products", async (req, res) => {
  const products = await Product.find({ userId: req.user._id });

  res.send(products);
});

router.post("/products", async (req, res) => {});

module.exports = router;
