import mongoose, { SchemaTypes } from "mongoose"
// SHOULD ADD DEFAULT VALUES
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    min: 2,
    max: 50,
  },
  lastname: {
    type: String,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    message: "email is a required field",
  },
  password: {
    type: String,
    min: 5,
    max: 1024,
    required: true,
    message: "password is a required field",
  },
  myProjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
  SharedProjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
  isAdmin: {
    type: Boolean,
    default: false,
  },
})

export const User = mongoose.model("User", userSchema, "User")
