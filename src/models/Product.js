const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: String,
  //calories: Number,
  //totalFat: Number,
  //saturatedFat: Number,
  //carbohydrate: Number,
  //sugars: Number,
  //fiber: Number,
  //protein: Number,
  //salt: Number,
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
  product: [foodSchema],
});

mongoose.model("Product", productSchema);
