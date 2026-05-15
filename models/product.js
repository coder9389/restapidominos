const mongoose = require("mongoose");

const choiceSchema = new mongoose.Schema({
  id: Number,
  englishName: String,
  arabicName: String,
  price: Number,
  sortOrder: Number,
  available: Boolean,
  isAvailable: Boolean,
});

const choiceCategorySchema = new mongoose.Schema({
  id: Number,
  englishName: String,
  arabicName: String,
  minimumSelections: Number,
  maximumSelections: Number,
  sortOrder: Number,
  choices: [choiceSchema],
});

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },

  englishName: {
    type: String,
    required: true,
  },

  arabicName: String,

  englishDescription: String,

  arabicDescription: String,

  price: {
    type: Number,
    required: true,
  },

  sortOrder: Number,

  available: Boolean,

  isAvailable: Boolean,

  ImageURL: String,

  choiceCategories: [choiceCategorySchema],
});

module.exports = mongoose.model("Product", productSchema);