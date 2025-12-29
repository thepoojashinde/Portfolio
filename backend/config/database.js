
const mongoose = require("mongoose");

require("dotenv").config();

exports.dbConnect = () => {
    if (!process.env.MONGODB_URL) {
        console.error("MONGODB_URL is not defined in environment variables");
        process.exit(1);
    }
    
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch( (err) => {
        console.log("DB CONNECTION ISSUES");
        console.error(err);
        process.exit(1);
    } );
}