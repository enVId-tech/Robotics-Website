import React from "react";
import "../../scss/sections/Banner.scss";
// import img from "../assets/img/banner/banner.jpg";

const Banner: React.FC = (): React.JSX.Element => {
    return (
        <section id="banner">
            <div id="container">
                <div id='left'>
                    <h1 id="main">
                        We are OA Robotics
                    </h1>
                    <p id="sub">
                    </p>
                </div>
                <div id='right'>
                    <img src="https://via.placeholder.com/500" alt="Banner" />
                </div>
            </div>
        </section>
    );
};

export default Banner;