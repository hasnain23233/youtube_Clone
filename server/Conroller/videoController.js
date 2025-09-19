const Video = require("../Model/videoModel");

// Upload video
exports.uploadVideo = async (req, res) => {
    try {
        const { title, description } = req.body;

        const video = await Video.create({
            title,
            description,
            videoUrl: `/uploads/videos/${req.file.filename}`,
            user: req.user ? req.user._id : req.body.userId || "123", // default user
        });

        res.status(201).json(video);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all videos
exports.getVideos = async (req, res) => {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.json(videos);
};

// Get video by ID
exports.getVideoById = async (req, res) => {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: "Video not found" });
    res.json(video);
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
        const updated = await Video.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete video
exports.deleteVideo = async (req, res) => {
    try {
        const { id } = req.params;
        await Video.findByIdAndDelete(id);
        res.json({ message: "Video deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
