import React from "react";
import "../scss/Banner.scss";
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
                        We are OA Robotics, a team of engineers and developers located in Orange County, California. 
                        We are based at Oxford Academy in Cypress, and strive to promote robotcs and STEM within our communities.
                        Our teams design, assemble, and test competitive robots, while learning and teaching the scientific and technical concepts behind it.
                        Our students are passionate about robotics and aim to promote and continue the culture of innovation and creativity throughout the team as a whole.
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