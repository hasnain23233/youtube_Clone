const Video = require("../Model/videoModel");

exports.uploadVideo = async (req, res) => {
    try {
        const { title, description } = req.body;

        const video = await Video.create({
            title,
            description,
            videoUrl: `/uploads/videos/${req.file.filename}`,
            user: req.user ? req.user._id : null // if auth is applied
        });

        res.status(201).json(video);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getVideos = async (req, res) => {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.json(videos);
};

exports.getVideoById = async (req, res) => {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: "Video not found" });
    res.json(video);
};
