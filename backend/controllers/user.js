const User = require("../models/User");

exports.welcome = (req, res) => {
    console.log("welcome to homepage");
    res.status(200).json({
        status: "Success",
        message: "Welcome to Home page"
    });
}

exports.createUser = async (req, res) => {
   try{
    const { name, email, phone, message } = req.body;
    
    // Validate required fields
    if (!name || !email) {
        return res.status(400).json({
            status: "Error",
            message: "Name and email are required fields"
        });
    }

    const createdUser = await User.create({
        name,
        email,
        phone,
        message
    });

    console.log("user created successfully");

    res.status(200).json({
        status: "Success",
        message: "user created successfully",
        data: createdUser
    })

   }
   catch(err){
    console.error("error while creating user:", err);
    res.status(500).json({
        status: "Error",
        message: err.message || "error while creating user"
    });
   }
}