import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todo: {
    type: "string",
    required: true,
  },
});

export const todoModel = mongoose.model("todoModel", todoSchema);
