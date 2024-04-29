import React from "react";
import Sections from "../../json/sections.json";
import "../../json/sections.json";

const ServiceSection: React.FC = (): React.JSX.Element => {
    const [serviceData, setServiceData] = React.useState({});

    React.useEffect(() => {
        setServiceData(Sections.Sections);
    }, []);

    return (
        <section id="service" className="service-section img-bg pt-100 pb-100 mt-150">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-10">
                        <div className="section-title text-center mb-50">
                            <h1>What We Do</h1>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-md-6">
                        <div className="single-service">
                            <div className="icon color-1">
                                <i className="lni lni-layers"></i>
                            </div>
                            <div className="content">
                                <h3>Create</h3>
                                <p>We create engaging content on our social media channels to keep our members and community
                                    up to date with our projects. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="single-service">
                            <div className="icon color-2">
                                <i className="lni lni-code-alt"></i>
                            </div>
                            <div className="content">
                                <h3>Build</h3>
                                <p>We build and program competition-ready robots and machines. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="single-service">
                            <div className="icon color-3">
                                <i className="lni lni-pallet"></i>
                            </div>
                            <div className="content">
                                <h3>Connect</h3>
                                <p>We connect our team through weekly meetings, bonding events, and competing in FRC!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ServiceSection;