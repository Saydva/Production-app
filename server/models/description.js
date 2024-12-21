const mongoose = require("mongoose");

const DescriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Description", DescriptionSchema);
