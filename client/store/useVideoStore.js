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

    uploadVideo: async (formData) => {
        try {
            set({ loading: true });
            const res = await API.post("/videos/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            set((state) => ({ videos: [res.data, ...state.videos], loading: false }));
        } catch (err) {
            set({ error: err.message, loading: false });
        }
    },
}));
