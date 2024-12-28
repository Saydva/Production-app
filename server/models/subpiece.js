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

module.exports = mongoose.model("Subpiece", SubpieceSchema);
