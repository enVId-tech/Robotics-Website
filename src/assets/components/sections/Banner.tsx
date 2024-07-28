import React from "react";
import "../../scss/sections/Banner.scss";
import img from "../../assets/new-img/logo-small-transparent.png";
// import img from "../../assets/new-img/logo-small.png";
// const img = require("../../assets/new-img/logo-small.png");

const Banner: React.FC = (): React.JSX.Element => {
    const imgRef = React.useRef<HTMLImageElement>(null);

    return (
        <section id="banner">
            <div id="container">
                <div id='top'>
                    <img src={img} alt="Banner" ref={imgRef} />
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