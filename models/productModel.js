const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "The Product Name is required field"],
    unique: [true, "The Product Name already exists"],
  },
  productValue: {
    type: String,
    required: [true, "The Product Value is required field"]
  },
  productQuantity: {
    type: String,
    required: [true, "The Product Quantity is required field"]
  },
  productValidity: {
    type: Date,
    default: Date("2023-01-01"),
  },
  produtDescription:{
    type: String
  },
  produtCategory: {
    type: String
  }
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
