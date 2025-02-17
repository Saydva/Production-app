const mongoose = require("mongoose");

const AttributeSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Attribute", AttributeSchema);
