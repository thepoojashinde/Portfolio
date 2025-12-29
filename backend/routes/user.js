const express = require("express");
const router = express.Router();

const {welcome, createUser} = require("../controllers/user");

router.get("/", welcome);
router.get("/health", (req, res) => {
    res.status(200).json({
        status: "Success",
        message: "Server is running"
    });
});

router.post("/createUser", createUser);

module.exports = router;