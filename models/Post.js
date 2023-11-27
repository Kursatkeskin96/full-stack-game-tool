import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    catSlug: {
      type: String,
      required: true,
    },
    // Reference to Category document
    cat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    // Reference to User document
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.Post || mongoose.model("Post", PostSchema);
