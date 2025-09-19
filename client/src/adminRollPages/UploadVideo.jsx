import { useState } from "react";
import { useVideoStore } from "../store/useVideoStore";

export default function UploadVideo() {
    const { uploadVideo, loading } = useVideoStore();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!file) return alert("Please select a video!");

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("video", file);

        uploadVideo(formData);
        setTitle("");
        setDescription("");
        setFile(null);
    };

    return (
        <div className="p-6 ml-60">
            <h2 className="text-white text-xl font-bold mb-4">Upload Video</h2>
            <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-gray-800 p-6 rounded-lg"
            >
                <input
                    type="text"
                    placeholder="Video Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 rounded bg-gray-900 text-white"
                />
                <textarea
                    placeholder="Video Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 rounded bg-gray-900 text-white"
                />
                <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="w-full text-white"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700"
                >
                    {loading ? "Uploading..." : "Upload"}
                </button>
            </form>
        </div>
    );
}
