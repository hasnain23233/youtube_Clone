import { useState } from "react";
import useAuthStore from "../store/useAuthentication";

export default function Login() {
    const { login, user, loading, error, success } = useAuthStore();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(form); // 👈 call zustand login action
    };

    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-gray-800 ">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Login
                </h2>

                {error && <p className="text-red-500 text-center">{error}</p>}
                {success && (
                    <p className="text-green-500 text-center">
                        Login successful 🎉 Welcome back {user?.username}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded transition"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="text-gray-400 text-center mt-4">
                    Don’t have an account?{" "}
                    <a href="/signup" className="text-white hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}
