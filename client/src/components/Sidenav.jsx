import { motion } from "framer-motion";
import {
    Home,
    Film,
    Users,
    History,
    ListVideo,
    Clock,
    ThumbsUp,
    Music,
    Gamepad2,
    FolderOpen
} from "lucide-react";
import { Link } from "react-router-dom";

function SidebarItem({ icon: Icon, label, to }) {
    return (
        <Link
            to={to}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
            <Icon size={20} />
            <span>{label}</span>
        </Link>
    );
}

export default function Sidebar({ isOpen }) {
    return (
        <motion.aside
            initial={{ x: -250 }}
            animate={{ x: isOpen ? 0 : -250 }}
            transition={{ type: "spring", stiffness: 70 }}
            className="bg-gray-900 text-white w-60 h-screen fixed top-0 left-0 py-16 p-4 space-y-6 shadow-lg z-40"
        >
            {/* Main */}
            <div>
                <h3 className="text-gray-400 text-sm mb-2">Main</h3>
                <SidebarItem icon={Home} label="Home" to="/" />
                <SidebarItem icon={Film} label="Shorts" to="/shorts" />
                <SidebarItem icon={Users} label="Subscriptions" to="/subscriptions" />
            </div>

            {/* You */}
            <div>
                <h3 className="text-gray-400 text-sm mb-2">You</h3>
                <SidebarItem icon={History} label="History" to="/history" />
                <SidebarItem icon={ListVideo} label="Playlist" to="/playlist" />
                <SidebarItem icon={Clock} label="Watch Later" to="/watch-later" />
                <SidebarItem icon={ThumbsUp} label="Liked Videos" to="/liked" />
            </div>

            {/* Subscriptions */}
            <div>
                <h3 className="text-gray-400 text-sm mb-2">Subscriptions</h3>
                <SidebarItem icon={FolderOpen} label="My Channels" to="/channels" />
            </div>

            {/* Explore */}
            <div>
                <h3 className="text-gray-400 text-sm mb-2">Explore</h3>
                <SidebarItem icon={Music} label="Music" to="/music" />
            </div>
        </motion.aside>
    );
}
