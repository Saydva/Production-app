const mongoose = require("mongoose");

const PieceSchema = new mongoose.Schema({
  partName: {
    type: String,
    required: true,
    unique: true,
  },
  partStTime: {
    type: Number,
    required: true,
  },
  attribute: {
    type: Array,
  },
 descrition: {
    type: Array,
  },
  operation: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Piece", PieceSchema);
