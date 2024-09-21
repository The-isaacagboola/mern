import express from "express";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import productRoute from "./router/product.route.js";
dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/products", productRoute);

app.listen(PORT, () => {
  connectDb();
  console.log(`server started ast htttp://localhost:${PORT}`);
});
