const mongoose = require("mongoose");

const SubpieceSchema = new mongoose.Schema({
  partName: {
    type: String,
    unique: true,
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
