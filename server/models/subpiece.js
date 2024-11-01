const mongoose = require("mongoose");

const SubpieceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
