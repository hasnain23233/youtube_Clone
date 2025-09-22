import React from 'react'
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import UploadVideo from './adminRollPages/UploadVideo';
import MyVideos from './adminRollPages/MyVideos';
import Signup from './auth/signup';

const pageRouting = () => {
    return (
        <div>
            <Routes>
                <Route path="/channels" element={<MyVideos />} />
                <Route path="/upload" element={<UploadVideo />} />
                <Route path="/allusers" element={<h1>All Users</h1>} />
                <Route path="/allvideos" element={<h1>All Videos</h1>} />

                {/* authentication routes */}
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    )
}

export default pageRouting
