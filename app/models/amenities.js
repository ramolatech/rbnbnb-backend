const mongoose = require("mongoose");

const AmenititesSchema = mongoose.Schema({
  amenitiesName: {
    type: String,
    required: true
  },
  amenitiesPrice: {
    type: Number,
    required: true
  },
  isChecked: {
    type: Boolean,
    default: false
  }
});
module.exports = mongoose.model("Amenities",AmenititesSchema);
