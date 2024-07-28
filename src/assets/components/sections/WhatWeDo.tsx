import React from "react";
import '../../scss/sections/WhatWeDo.scss';

const imgNames: string[] = ["robotics_working", "marketing_working", "competition_working"];

const WhatWeDo: React.FC = (): React.JSX.Element => {
    return (
        <section id="whatwedo">
            <h1 id="title">
                What we do
            </h1>
            {/* Refer to what OA STEM does with their about page to remember what I want to do. */}
            <div id="secondary">
                <div id="create" className="do">
                    <div id="inform_img"/>
                    <h1 className="title">
                        Inform
                    </h1>

                    <p className="description">
                        We inform and educate our community about the importance of STEM and robotics.
                    </p>
                </div>

                <div id="build" className="do">
                    <div id="build_img" />
                    <h1 className="title">
                        Build
                    </h1>

                    <p className="description">
                        We build and program competition-ready robots and machines.
                    </p>
                </div>

                <div id="compete" className="do">
                    <div id="compete_img" />
                    <h1 className="title">
                        Compete
                    </h1>

                    <p className="description">
                        We compete in various robotics competitions and events to showcase our robots and skills.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo;