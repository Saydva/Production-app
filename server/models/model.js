const mongoose = require("mongoose");

const dataModel = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  dataNumber: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
    require: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("data", dataModel);
