import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      maxlength: 100,
    },
    hours: {
      type: Number,
      required: true,
      maxlength: 168,
    },
    type: {
      type: String,
      default: "entry",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema);
