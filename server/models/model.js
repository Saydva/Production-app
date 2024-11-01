const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema({
  name: {
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
});

module.exports = mongoose.model("Model", ModelSchema);
