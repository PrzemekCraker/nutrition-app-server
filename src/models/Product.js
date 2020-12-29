const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  calories: Number,
  totalFat: Number,
  saturatedFat: Number,
  carbohydrate: Number,
  sugars: Number,
  fiber: Number,
  protein: Number,
  salt: Number,
});
const productSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    default: "",
  },
  nutrition: [foodSchema],
});

mongoose.model("Product", productSchema);
