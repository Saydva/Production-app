const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema({
  partName: {
    type: String,
    required: true,
    unique: true,
  },
  subpiecec: {
    type: Array,
  },

  piecec: {
    type: Array,
  },
  subPiecec: {
    type: Array,
  },
  operation: {
    type: Array,
  },
});

module.exports = mongoose.model("Model", ModelSchema);
