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

router.post("/products", async (req, res) => {
  const { name, product } = req.body;

  if (!name || !product) {
    return res.status(422).send({ error: "You must provide a name" });
  }

  try {
    const product = new Product({ name, product, userId: req.user._id });
    await product.save();
    res.send(product);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
