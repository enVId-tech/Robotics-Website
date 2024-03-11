import React from "react";

const HomeSection: React.FC = (): React.JSX.Element => {
    return (
        <section id="home" className="hero-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h1 className="wow fadeInUp">We are OA Robotics</h1>
                            <span className="wow fadeInLeft">Team FRC 4079 & Team FTC 19812</span>
                            <p className="wow fadeInUp">
                                We are OA Robotics, a competitive robotics program located in Orange County, California. We are
                                based at Oxford Academy in Cypress, and strive to promote robotics and STEM within our communities.
                                Our teams design, build, run, and manage competitive robots, while learning and teaching the scientific
                                and technical concept behind it. Our students aim to continue the culture of constantly improving and
                                challenging ourselves and the team as a whole.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-img wow fadeInUp">
                            <img src="assets/img/hero/team1.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection;