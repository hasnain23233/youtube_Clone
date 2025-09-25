const mongoose = require("mongoose");
const User = require("../Model/UserModel");


// Register User
exports.postUserResigter = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        console.log("Received signup data:", req.body);

    } catch (error) {
        next(error);
    }
}