import React from "react";
import "../../scss/sections/Banner.scss";
import img from "../../assets/new-img/logo-small-transparent.png";
// import img from "../../assets/new-img/logo-small.png";
// const img = require("../../assets/new-img/logo-small.png");

const Banner: React.FC = (): React.JSX.Element => {
    const [offsetY, setOffsetY] = React.useState(0);

    const handleScroll = (): void => {
        setOffsetY(window.scrollY);
    }


    window.addEventListener('scroll', handleScroll);

    return (
        <section
            id="banner"
            style={{
                backgroundImage: `${img}`,
                backgroundPositionY: `${offsetY * 0.4}px`
            }}>
            <div id="container">
                <div id='top'>
                    <img src={img} alt="Banner" />
                </div>
                <div id='bottom'>
                    <h1 id="main">
                        We are OA Robotics
                    </h1>
                    <h5 id="sub">
                        FRC - FTC - VEX
                    </h5>
                </div>
            </div>
        </section>
    );
};

export default Banner;