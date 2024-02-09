import mongoose from "mongoose";

const shoeCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
});

//create the category model
export const Category = mongoose.model("ShoeCategory", shoeCategorySchema);
