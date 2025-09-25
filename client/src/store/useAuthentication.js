import { create } from "zustand";
import API from "../services/api";

const useAuthStore = create((set) => ({
    user: null,
    loading: false,
    error: null,
    success: false,

    // --- Signup Action ---
    signup: async (form) => {
        set({ loading: true, error: null, success: false });
        try {
            const res = await API.post("/auth/signup", form);
            set({
                user: res.data.user, // 👈 store user data in zustand
                success: true,
            });
        } catch (err) {
            set({
                error: err.response?.data?.message || "Signup failed",
            });
        } finally {
            set({ loading: false });
        }
    },

    // --- Logout Action ---
    logout: () => {
        set({ user: null, success: false });
    },
}));

export default useAuthStore;
