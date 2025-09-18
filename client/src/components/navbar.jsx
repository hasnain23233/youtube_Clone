import { Link } from "react-router-dom";
import { useState } from "react";
import { Search, Upload, User } from "lucide-react"; // ✅ icons (install lucide-react)

export default function Navbar() {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching:", query);
        // Future: send query to backend AI search API
    };

    return (
        <nav className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between shadow-md sticky top-0 z-50">

            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-red-500">
                YouTube<span className="text-white">AI</span>
            </Link>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex items-center bg-gray-800 rounded-full px-3 py-1 w-1/2">
                <input
                    type="text"
                    placeholder="Search with AI..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="bg-transparent outline-none w-full text-white px-2"
                />
                <button type="submit" className="text-gray-400 hover:text-white">
                    <Search size={20} />
                </button>
            </form>

            {/* Right Section */}
            <div className="flex items-center space-x-5">
                <Link to="/upload" className="hover:text-red-400 flex items-center gap-1">
                    <Upload size={20} /> <span className="hidden sm:block">Upload</span>
                </Link>

                {/* User Avatar / Login */}
                <Link to="/login" className="hover:text-red-400 flex items-center gap-1">
                    <User size={20} /> <span className="hidden sm:block">Login</span>
                </Link>
            </div>
        </nav>
    );
}
