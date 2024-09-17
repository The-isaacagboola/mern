const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 10,
    required: true,
  },
  age: {
    type: Number,
    max: 65,
    immutable: true,
  },
  email: String,
});

module.exports = mongoose.model("User", userSchema);
