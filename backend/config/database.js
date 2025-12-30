const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect = async () => {
  try {
    if (!process.env.MONGODB_URL) {
      console.error("❌ MONGODB_URL missing");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ DB connected successfully");
  } catch (err) {
    console.error("❌ DB CONNECTION FAILED");
    console.error(err.message);
    // ❌ process.exit(1) REMOVE
  }
};
