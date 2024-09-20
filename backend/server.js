import express from "express";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import Product from "./model/product.model.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/api/products", async (req, res) => {
  try {
    const data = await Product.find({});
    res.status(200).json({ success: "true", data: data });
  } catch (error) {
    console.error("Error Fetching Data:", error.message);
  }
  //   res.send("Server is Ready");
});

app.post("/api/products", async (req, res) => {
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
});

app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  try {
    const response = await Product.findOneAndUpdate({ _id: id }, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error("Error Updating Product :", error.message);
    res.status(500).json({ success: false });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Product.deleteOne({ _id: id });
    console.log(deleted);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(`Deleting Error: ${err.message}`);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => {
  connectDb();
  console.log("server started ast htttp://localhost:5000");
});

/*


*/
