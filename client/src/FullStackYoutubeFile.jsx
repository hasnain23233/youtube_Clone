import React from 'react'
import Navbar from './components/navbar'
import SideNavbar from './components/Sidenavbar'
import PageRouting from './pageRouting'

const FullStackYoutubeFile = () => {
    return (
        <div>
            <Navbar />
            <div className=' mt-2 flex gap-10'>
                <div className=' w-2/12'>
                    <SideNavbar />
                </div>
                <div className='w-10/12 '>
                    <PageRouting />
                </div>
            </div>
        </div>
    )
}

export default FullStackYoutubeFile
