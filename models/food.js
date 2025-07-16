const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category:  { type: String, required: true },
    description:  { type: String, required: true },
    image: String,
  },
  { Timestamps: true }
);

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;

