import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  slug: {
    type: String,
    required: [true, "Email is required"],
  },
  title: {
    type: String,
    required: [true, "discordNick is required"],
  },
  img: {
    type: Number,
    unique: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
}, { timestamps: true });

export default mongoose?.models?.Category || mongoose.model("Category", CategorySchema);
