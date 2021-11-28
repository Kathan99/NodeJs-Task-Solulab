const mongoose = require("mongoose");
const categorymodel = require("./categorymodel");

//Creating a schema for Product Model
const ProductSchema = mongoose.Schema(
  {
    productId: Number,
    productName: String,
    qtyPerUnit: Number,
    unitPrice: Number,
    unitInStock: Number,
    discontinued: Boolean,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  
);

module.exports = mongoose.model("Product", ProductSchema);