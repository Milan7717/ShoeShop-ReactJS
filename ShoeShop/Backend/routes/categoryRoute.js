import express from "express";
import { Category } from "./../models/shoeCategory.js";

const router = express.Router();

//get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

//get single category by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleCategory = await Category.findById(id);
    return res.status(200).json(singleCategory);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

//create a new category
router.post("/", async (req, res) => {
  try {
    if (!req.body.name || !req.body.image) {
      return res.status(400).send({
        message: "Send all fields : name of category and image",
      });
    }
    const newCategory = {
      name: req.body.name,
      image: req.body.image,
    };
    const category = await Category.create(newCategory);
    return res.status(201).send(category);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "error creating category" });
  }
});

//edit the category
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.name || !req.body.image) {
      return res.status(400).send({
        message: "Send all fields to edit the category",
      });
    }
    const { id } = req.params;

    const result = await Category.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "error finding category" });
    }

    return res.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error);
  }
});

//deleting catgory
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Category.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Error deleting the category" });
    }
    return res.status(200).send({ message: "Category deleted successfully" });
  } catch (error) {
    console.log(error);
  }
});

export default router;
