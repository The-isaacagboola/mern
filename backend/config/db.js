import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`dababase connected on ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit(1); // 1 code means exit with a failure
  }
};
