import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidenav";

export default function SideNavbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="border-b border-gray-300 w-2/12">
                <Sidebar isOpen={open} />
            </div>
        </>
    );
}
