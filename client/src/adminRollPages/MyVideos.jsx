import { useEffect, useState } from "react";
import API from "../services/api";

export default function MyVideos() {
    const [videos, setVideos] = useState([]);
    const userId = "123"; // 🔹 baad me authentication se replace karna hai

    useEffect(() => {
        API.get(`/videos/user/${userId}`).then((res) => setVideos(res.data));
    }, [userId]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 ml-60">
            {videos.map((video) => (
                <div
                    key={video._id}
                    className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                >
                    <video
                        src={`http://localhost:5000${video.videoUrl}`}
                        className="w-full h-40 object-cover"
                    />
                    <div className="p-3">
                        <h3 className="text-white font-semibold truncate">{video.title}</h3>
                        <p className="text-gray-400 text-sm">{video.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
