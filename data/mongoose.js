const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://tharunyetti24:<Tharun%40mongodb1>@cluster0.yzi6k.mongodb.net/?appName=Cluster0");
    console.log("MongoDB successfully connected");
  } catch (err) {
    console.log("Database connection error:", err);
  }
};

module.exports = connectDB;