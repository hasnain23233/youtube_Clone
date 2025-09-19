const fs = require("fs");
const path = require("path");
const Video = require("../Model/videoModel");

// Upload video
exports.uploadVideo = async (req, res) => {
    try {
        console.log("Upload request received ✅");

        if (!req.file) {
            console.log("⚠️ No file received!");
            return res.status(400).json({ message: "No video file uploaded!" });
        }

        const { title, description, userId } = req.body;

        console.log("Form Data:", { title, description, userId });
        console.log("Uploaded File:", req.file);

        const newVideo = new Video({
            title: title || "Untitled",
            description: description || "",
            videoUrl: `/uploads/videos/${req.file.filename}`,
            user: userId || null,
        });


        const savedVideo = await newVideo.save();
        console.log("✅ Video saved to MongoDB:", savedVideo);

        res.status(201).json(savedVideo);
    } catch (error) {
        console.error("❌ Upload Error:", error);
        res.status(500).json({ message: error.message });
    }
};

// Get all videos
exports.getVideos = async (req, res) => {
    try {
        const videos = await Video.find().sort({ createdAt: -1 });
        console.log("✅ Videos fetched:", videos.length);
        res.json(videos);
    } catch (err) {
        console.error("❌ Fetch Error:", err);
        res.status(500).json({ message: err.message });
    }
};

// Get video by ID
exports.getVideoById = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        if (!video) return res.status(404).json({ message: "Video not found" });
        res.json(video);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all videos of one user
exports.getUserVideos = async (req, res) => {
    try {
        const { userId } = req.params;
        const videos = await Video.find({ user: userId }).sort({ createdAt: -1 });
        res.json(videos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update video
exports.updateVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const updated = await Video.findByIdAndUpdate(
            id,
            { title, description },
            { new: true }
        );

        if (!updated) return res.status(404).json({ message: "Video not found" });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete video
exports.deleteVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const video = await Video.findById(id);
        if (!video) return res.status(404).json({ message: "Video not found" });

        // ⚡ Proper file path fix
        const filePath = path.join(__dirname, "..", "uploads", "videos", path.basename(video.videoUrl));
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log("🗑️ File deleted:", filePath);
        }

        await video.deleteOne();
        res.json({ message: "Video deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
