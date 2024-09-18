import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 1,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //created and updatded at
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
