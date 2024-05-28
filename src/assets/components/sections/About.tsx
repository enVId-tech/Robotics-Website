import React from "react";
import '../../scss/sections/About.scss';

const About: React.FC = (): React.JSX.Element => {
    return (
        <section id="about">
            <div id="container">
                <div id="left">
                    <img src="https://via.placeholder.com/200" alt="About" />
                    <img src="https://via.placeholder.com/200" alt="About" />
                    <img src="https://via.placeholder.com/200" alt="About" />
                </div>
                <div id="right">
                    <div id="top">
                        <h1 id="title">About Us</h1>
                        <p id="description">
                            Placeholder1_1
                        </p>
                    </div>
                    <div id="bottom">
                        <div className="about_org">
                            <h1 className="about_title">
                                Mission Statement
                            </h1>

                            <div className="about_desc_holder">
                                <p className="about_desc">
                                    Placeholder1_2
                                </p>
                            </div>
                        </div>
                        <div className="about_org">
                            <h1 className="about_title">
                                Our Achievements
                            </h1>
                            
                            <div className="about_desc_holder">
                                <p className="about_desc">
                                    Placeholder2_2
                                </p>
                            </div>
                        </div>
                        <div className="about_org">
                            <h1 className="about_title">
                                What is FIRST&copy;?
                            </h1>

                            <div className="about_desc_holder">
                                <p className="about_desc">
                                    Placeholder3_2
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;