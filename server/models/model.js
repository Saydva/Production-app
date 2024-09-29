const mongoose = require("mongoose");

const dataModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  dataNumber: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("data", dataModel);
