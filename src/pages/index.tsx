import React from 'react'
import Header from '../assets/components/Header.tsx'
import Footer from '../assets/components/Footer.tsx'
import Banner from '../assets/components/sections/Banner.tsx'
import About from '../assets/components/sections/About.tsx'
import Robots from '../assets/components/sections/Robots.tsx'

const MainPage: React.FC = (): React.JSX.Element => {
    return (
        <div id="Main">
            <Header />
            <Banner />
            <About />
            <Robots />
            <Footer />
        </div>
    )
}

export default MainPage;