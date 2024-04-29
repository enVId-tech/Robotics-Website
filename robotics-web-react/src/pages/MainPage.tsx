import React from "react";
import Header from '../assets/ts/header/header.tsx';
import Footer from '../assets/ts/footer/footer.tsx';
import ServiceSection from "../assets/ts/sections/service.tsx";

const MainPage: React.FC = (): React.JSX.Element => {
    return (
        <>
            <Header />
            <ServiceSection />
            <Footer />
        </>
    )
}

export default MainPage;