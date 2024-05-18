import React from 'react'
import Header from '../assets/components/Header.tsx'
import Footer from '../assets/components/Footer.tsx'
import Banner from '../assets/components/Banner.tsx'

const MainPage: React.FC = (): React.JSX.Element => {
    return (
        <div id="Main">
            <Header />
            <Banner />
            <Footer />
        </div>
    )
}

export default MainPage;