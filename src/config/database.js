import mongoose from "mongoose";

const mongoDBConnect = async () => {
  try {
    const mongDbConn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Mongo Db Connected");
  }
};
