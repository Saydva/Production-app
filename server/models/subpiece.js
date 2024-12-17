const mongoose = require("mongoose");

const SubpieceSchema = new mongoose.Schema({
  partName: {
    type: String,
    unique: true,
  },
  partStTime: {
    type: Number,
    required: true,
  },
  piecec: {
    type: Array,
  },
  category: {
    type: Array,
  },
  operation: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Subpiece", SubpieceSchema);
