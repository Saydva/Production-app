const mongoose = require("mongoose");

const OptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Option", OptionSchema);
