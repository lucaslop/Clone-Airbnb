const mongoose = require("mongoose");
const SpotSchema = new mongoose.Schema({
  thumbmail: String,
  company: String,
  techs: [String],
  price: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Spot", SpotSchema);
