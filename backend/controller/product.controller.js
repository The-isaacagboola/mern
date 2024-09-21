import mongoose, { mongo } from "mongoose";
import Product from "../model/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const data = await Product.find({});
    res.status(200).json({ success: "true", data: data });
  } catch (error) {
    console.error("Error Fetching Data:", error.message);
  }
};

export const addNewProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: "false", message: "Please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
    console.log(newProduct);
  } catch (error) {
    console.error("Error in Create product:", error.message);
    res.status(500).json({ status: false, message: "Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: "false",
      message: `Object with id: ${id} does not exist`,
    });
  }
  try {
    const response = await Product.findOneAndUpdate({ _id: id }, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error("Error Updating Product :", error.message);
    res.status(500).json({ success: false });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: "false",
      message: "Object with the specified id does not exist",
    });
  }

  try {
    const deleted = await Product.deleteOne({ _id: id });
    console.log(deleted);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(`Deleting Error: ${err.message}`);
    res.status(500).json({ success: false, message: "Server Error " });
  }
};
