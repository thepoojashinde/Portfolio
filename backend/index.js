const express = require("express");
const app = express();
require("dotenv").config();
const {dbConnect} = require("./config/database");
const routes = require("./routes/user");
const cors = require("cors");


const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());


// database connect
dbConnect();

// mounting routes
app.use("/api/v1", routes);

// Root route
app.get("/", (req, res) => {
    res.status(200).json({
        status: "Success",
        message: "Welcome to Portfolio Backend API",
        endpoints: {
            health: "/api/v1/health",
            createUser: "POST /api/v1/createUser"
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: "Error",
        message: "Something went wrong!"
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        status: "Error",
        message: "Route not found"
    });
});

// listening 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});