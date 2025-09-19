import { Menu } from "lucide-react";
import { useState, useEffect, use } from "react";
import Sidebar from "./Sidenav";

export default function SideNavbar() {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setOpen(true);
        }, 2000);
    }, []);

    return (
        <>
            <div className="border-b border-gray-300 w-2/12">
                <Sidebar isOpen={open} />
            </div>
        </>
    );
}
