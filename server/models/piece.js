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
  partOfPiece: {
    type: Boolean,
    required: true,
  },
  piece: {
    type: Boolean,
    required: true,
  },
  category: {
    type: Array,
    // required: true,
  },
});

module.exports = mongoose.model("Piece", PieceSchema);
