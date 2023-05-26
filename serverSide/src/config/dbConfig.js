import mongoose from "mongoose";

export const dbConnection = () => {
  try {
    const MONGO_CLIENT = "mongodb://localhost/task_list";
    const conn = mongoose.connect(MONGO_CLIENT);
    conn && console.log("connection established");
  } catch (error) {
    console.log(error);
  }
};
