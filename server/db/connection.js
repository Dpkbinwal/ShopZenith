const mongoose = require('mongoose');

const URL = process.env.MONGODB_URI||"mongodb://localhost:27017";

const connectDB = async () => {
  try {
    await mongoose.connect(URL, {
      dbName:'ShopZenith',
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;