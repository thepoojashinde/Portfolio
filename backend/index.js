const express = require("express");
const app = express();
require("dotenv").config();
const { dbConnect } = require("./config/database");
const routes = require("./routes/user");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

// 🔥 CORS — MUST BE FIRST
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// 🔥 HANDLE PREFLIGHT REQUESTS
app.options("*", cors());

// BODY PARSER
app.use(express.json());

// DB CONNECT
dbConnect();

// TEST ROOT ROUTE
app.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Backend running successfully 🚀",
  });
});

// API ROUTES
app.use("/api/v1", routes);

// START SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
