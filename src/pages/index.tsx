import React from 'react'
import Header from '../assets/components/globals/Header.tsx'
import Footer from '../assets/components/globals/Footer.tsx'
import Banner from '../assets/components/sections/Banner.tsx'
import About from '../assets/components/sections/About.tsx'
import Robots from '../assets/components/sections/Robots.tsx'
import WhatWeDo from '../assets/components/sections/WhatWeDo.tsx'
import Impact from '../assets/components/sections/Impact.tsx'
import Sponsors from '../assets/components/sections/Sponsors.tsx'
import Contact from '../assets/components/sections/Contact.tsx'

const MainPage: React.FC = (): React.JSX.Element => {
    return (
        <div id="Main">
            {/* Top of Page */}
            <Header />

            {/* Page content */}
            <Banner />
            <About />
            <WhatWeDo />
            <Impact />
            <Sponsors />
            <Robots />
            <Contact />

            {/* Bottom of Page */}
            <Footer />
        </div>
    )
}

export default MainPage;