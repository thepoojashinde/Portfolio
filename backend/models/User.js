const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
  },
});

// ❌ EMAIL MIDDLEWARE TEMPORARILY REMOVED
// userSchema.post("save", async function (doc) {
//   try {
//     console.log("DOC", doc);
//   } catch (error) {
//     console.error(error);
//   }
// });

module.exports = mongoose.model("User", userSchema);
