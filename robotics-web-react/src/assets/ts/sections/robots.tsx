import React from "react";

const RobotsMain: React.FC = (): React.JSX.Element => {
    return (
        <section className="counter-up-section pt-150 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="counter-up-content mb-50">
                            <div className="section-title mb-40">
                                <h1 className="mb-20 wow fadeInUp" data-wow-delay=".2s"
                                    style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>Our Impact
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay=".4s"
                                    style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInUp" }}>Our team
                                    raises awareness about STEM, as the
                                    only FRC Team in the Anaheim Union High School District.</p>
                            </div>
                            <div className="counter-up-wrapper">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single-counter">
                                            <div className="icon color-1">
                                                <i className="lni lni-emoji-smile"></i>
                                            </div>
                                            <div className="content">
                                                <h1 id="secondo1" className="countup" cup-end="52" cup-append=" ">52 </h1>
                                                <span>Current Members</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single-counter">
                                            <div className="icon color-2">
                                                <i className="lni lni-checkmark"></i>
                                            </div>
                                            <div className="content">
                                                <h1 id="secondo2" className="countup" cup-end="10" cup-append=" ">10 </h1>
                                                <span>FRC Robots Built</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single-counter">
                                            <div className="icon color-3">
                                                <i className="lni lni-world"></i>
                                            </div>
                                            <div className="content">
                                                <h1 id="secondo3" className="countup" cup-end="13" cup-append="">13</h1>
                                                <span>Industry Mentors</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single-counter">
                                            <div className="icon color-4">
                                                <i className="lni lni-users"></i>
                                            </div>
                                            <div className="content">
                                                <h1 id="secondo4" className="countup" cup-end="12" cup-append=" ">12 </h1>
                                                <span>Active Alumni</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="counter-up-img mb-50">
                            <img src="assets/img/counter-up/collage2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RobotsMain;