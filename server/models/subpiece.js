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
});

module.exports = mongoose.model("Subpiece", SubpieceSchema);
