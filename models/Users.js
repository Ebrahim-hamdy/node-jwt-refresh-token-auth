const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  refreshToken: String
});

const Users = mongoose.model("Users", usersSchema, "Users");

module.exports = Users;
