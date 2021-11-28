const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    categoryId: Number,
    categoryName: String,
  },
  
);

module.exports = mongoose.model("Category", CategorySchema);