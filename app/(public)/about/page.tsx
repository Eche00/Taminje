import React from 'react'
import MissionAndVission from './MissionAndVission'
import Hero from './Hero'
import Leaders from './Leaders'
import Location from './Location'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "About Us | Taminje International Limited",
    description: "Learn about our leadership, experience, and multisector expertise.",
};


function page() {
    return (
        <div>
            {/* About us container */}
            <main>
                <div className='bg-[#192730] min-h-screen bg-[linear-gradient(to_right,#33a25a36_0.3px,transparent_0.1px),linear-gradient(to_bottom,#33a25a36_0.3px,transparent_0.1px)] md:bg-size-[104px_104px] bg-size-[50px_50px] mask-[radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])] border-b border-[#33a25a36]'>
                    <Hero />
                </div>
                <MissionAndVission />
                <Leaders />
                <Location />
            </main>
        </div>
    )
}

export default page