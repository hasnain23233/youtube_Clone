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
} = require("../Conroller/videoController");

// Upload
router.post("/upload", upload.single("video"), uploadVideo);

// Get all videos
router.get("/", getVideos);

// ⚡ Pehle user route rakha
router.get("/user/:userId", getUserVideos);

// Get single video
router.get("/:id", getVideoById);

// Update video
router.put("/:id", updateVideo);

// Delete video
router.delete("/:id", deleteVideo);

module.exports = router;
