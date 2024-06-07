import React from "react";
import Teams from "../assets/components/sections/Teams.tsx";
import Header from "../assets/components/globals/Header.tsx";
import Footer from "../assets/components/globals/Footer.tsx";

const OurTeamsPage: React.FC = (): React.JSX.Element => {
    return (
        <div id="Main">
            {/* Top of Page */}
            <Header />

            {/* Page content */}
            <Teams />

            {/* Bottom of Page */}
            <Footer />
        </div>
    )
}

export default OurTeamsPage;