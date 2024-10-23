const mongoose = require("mongoose");

const PieceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  stTime: {
    type: Number,
    required: true,
  },
  basicPart: {
    type: Boolean,
    required: true,
  },
  category: {
    type: Array,
  },
  material: {
    type: Array,
  },
});

module.exports = mongoose.model("Piece", PieceSchema);
