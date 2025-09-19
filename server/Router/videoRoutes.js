const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const {
    uploadVideo,
    getVideos,
    getVideoById,
    getUserVideos,
    updateVideo,
    deleteVideo,
} = require("../Controller/videoController");

// Upload
router.post("/upload", upload.single("video"), uploadVideo);

// Get all videos
router.get("/", getVideos);

// Get single video
router.get("/:id", getVideoById);

// Get all videos of a user
router.get("/user/:userId", getUserVideos);

// Update video
router.put("/:id", updateVideo);

// Delete video
router.delete("/:id", deleteVideo);

module.exports = router;
