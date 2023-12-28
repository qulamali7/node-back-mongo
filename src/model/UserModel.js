import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
  isMarried: Boolean,
});

export const usersModel = mongoose.model("users", usersSchema);
