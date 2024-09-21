import express from "express";

import {
  addNewProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", addNewProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
