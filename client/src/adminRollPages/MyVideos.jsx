import { useEffect, useState } from "react";
import { useVideoStore } from "../store/useVideoStore";

export default function MyVideos() {
    const userId = "123"; // 🔹 future: auth
    const { videos, fetchUserVideos, updateVideo, deleteVideo } = useVideoStore();
    const [editing, setEditing] = useState(null);
    const [form, setForm] = useState({ title: "", description: "" });

    useEffect(() => {
        fetchUserVideos(userId);
    }, [userId, fetchUserVideos]);

    const handleEdit = (video) => {
        setEditing(video._id);
        setForm({ title: video.title, description: video.description });
    };

    const handleSave = (id) => {
        updateVideo(id, form);
        setEditing(null);
    };

    return (
        <div className="p-6 ml-60">
            <h2 className="text-white text-2xl font-bold mb-4">My Channel Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                    <div
                        key={video._id}
                        className="bg-gray-900 p-4 rounded-lg shadow-lg space-y-2"
                    >
                        <video
                            src={`http://localhost:5000${video.videoUrl}`}
                            className="w-full h-40 rounded"
                            controls
                        />
                        {editing === video._id ? (
                            <div>
                                <input
                                    type="text"
                                    value={form.title}
                                    onChange={(e) =>
                                        setForm({ ...form, title: e.target.value })
                                    }
                                    className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
                                />
                                <textarea
                                    value={form.description}
                                    onChange={(e) =>
                                        setForm({ ...form, description: e.target.value })
                                    }
                                    className="w-full p-2 rounded bg-gray-800 text-white"
                                />
                                <div className="flex gap-2 mt-2">
                                    <button
                                        onClick={() => handleSave(video._id)}
                                        className="bg-green-600 px-3 py-1 rounded"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setEditing(null)}
                                        className="bg-gray-600 px-3 py-1 rounded"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h3 className="text-white font-bold">{video.title}</h3>
                                <p className="text-gray-400">{video.description}</p>
                                <div className="flex gap-2 mt-2">
                                    <button
                                        onClick={() => handleEdit(video)}
                                        className="bg-blue-600 px-3 py-1 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteVideo(video._id)}
                                        className="bg-red-600 px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
