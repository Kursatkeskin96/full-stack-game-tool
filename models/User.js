import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, "Email already exist"],
    required: [true, "Email is required"],
  },
  discordNick: {
    type: String,
    required: [true, "discordNick is required"],
  },
  discordId: {
    type: Number,
    unique: true,
    required: true,
  },
  image: {
    type: String,
  },
  verifiedUser: {
    type: Number,
    default: 0,
  },
  igNick: {
    type: String,
    unique: true,
    default: "",
  },
  role: {
    type: String,
    required: true,
    default: "User",
  }
});


export default mongoose?.models?.User || mongoose.model("User", UserSchema);