import { create } from "zustand";
import API from "../services/api";

export const useVideoStore = create((set) => ({
    videos: [],
    loading: false,
    error: null,

    fetchVideos: async () => {
        try {
            set({ loading: true });
            const res = await API.get("/videos");
            set({ videos: res.data, loading: false });
        } catch (err) {
            set({ error: err.message, loading: false });
        }
    },

    fetchUserVideos: async (userId) => {
        try {
            set({ loading: true });
            const res = await API.get(`/videos/user/${userId}`);
            set({ videos: res.data, loading: false });
        } catch (err) {
            set({ error: err.message, loading: false });
        }
    },

    uploadVideo: async (formData) => {
        try {
            set({ loading: true });
            const res = await API.post("/videos/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            set((state) => ({
                videos: [res.data, ...state.videos],
                loading: false,
            }));
        } catch (err) {
            set({ error: err.message, loading: false });
        }
    },

    updateVideo: async (id, data) => {
        try {
            const res = await API.put(`/videos/${id}`, data);
            set((state) => ({
                videos: state.videos.map((v) => (v._id === id ? res.data : v)),
            }));
        } catch (err) {
            console.error(err);
        }
    },

    deleteVideo: async (id) => {
        try {
            await API.delete(`/videos/${id}`);
            set((state) => ({
                videos: state.videos.filter((v) => v._id !== id),
            }));
        } catch (err) {
            console.error(err);
        }
    },
}));
