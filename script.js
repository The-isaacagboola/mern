const mongoose = require("mongoose");
const User = require("./backend/model/User");

try {
  mongoose.connect("mongodb://localhost:27017/testdb");
} catch (err) {
  console.log(err.message);
}

async function makeUser() {
  try {
    const newUser = await User.create({
      name: "Isaac Adeyemi Agboola",
      email: "est@geee.com",
    });

    newUser.save();
  } catch (err) {
    console.log(err.message);
  }
}
makeUser();
