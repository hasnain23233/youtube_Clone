const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const videoRoutes = require('./Router/videoRoutes');
const AuthRouter = require('./Router/AuthRouter');

const app = express();
const port = process.env.PORT || 5000;
const mongoDBLink = process.env.MONGO_URL;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads")); // ⚡ Ye line sahi hai

// Routes
app.use("/api/videos", videoRoutes);
app.use("/api/auth", AuthRouter); // ⚡ Auth routes

// DB Connection
mongoose
    .connect(mongoDBLink, { dbName: "youtube_clone" })
    .then(() => {
        app.listen(port, () => {
            console.log(`✅ Server running on http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error("❌ Error connecting to MongoDB:", err.message);
    });
