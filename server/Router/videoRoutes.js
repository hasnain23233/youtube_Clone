const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const { uploadVideo, getVideos, getVideoById } = require("../Conroller/videoController");

router.post("/upload", upload.single("video"), uploadVideo);
router.get("/", getVideos);
router.get("/:id", getVideoById);

module.exports = router;
