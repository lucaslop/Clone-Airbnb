const mongoose = require("mongoose");
const UserShcema = new mongoose.Schema({
  email: String
});

module.exports = mongoose.model("User", UserShcema);
