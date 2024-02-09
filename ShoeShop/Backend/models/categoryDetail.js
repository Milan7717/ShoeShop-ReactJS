import mongoose from "mongoose";
import { Category } from "./shoeCategory.js";

const categoryDetailSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      reduired: true,
    },
    brand: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const CategoryDetail = mongoose.model(
  "ShoesDetails",
  categoryDetailSchema
);
