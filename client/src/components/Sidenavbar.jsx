import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidenav";

export default function SideNavbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="border-b border-gray-300 w-4/12">
                <nav className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between shadow-md sticky top-0 z-50">
                    <button onClick={() => setOpen(!open)} className="mr-4">
                        <Menu size={24} />
                    </button>
                </nav>

                <Sidebar isOpen={open} />
            </div>
        </>
    );
}
