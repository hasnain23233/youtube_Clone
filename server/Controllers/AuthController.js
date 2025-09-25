const User = require("../Model/UserModel");
const bcrypt = require("bcryptjs");

// Register User
exports.postUserResigter = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        console.log("Received signup data:", req.body);

        // check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({
            message: "User registered successfully 🎉",
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
            },
        });
    } catch (error) {
        console.error("Error in user register:", error.message);
        res.status(500).json({ message: "Something went wrong" });
    }
};

exports.postUserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // return success
        res.status(200).json({
            message: "Login successful 🎉",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("Login error:", error.message);
        res.status(500).json({ message: "Something went wrong" });
    }
};
