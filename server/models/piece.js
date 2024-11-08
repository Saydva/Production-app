const mongoose = require("mongoose");

const PieceSchema = new mongoose.Schema({
  partName: {
    type: String,
    required: true,
    unique: true,
  },
  stTime: {
    type: Number,
    required: true,
  },
  category: {
    type: Array,
  },
  option: {
    type: Array,
  },
});

module.exports = mongoose.model("Piece", PieceSchema);
