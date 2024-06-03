import React from "react";
import '../../scss/sections/WhatWeDo.scss';

// Combine what we do into teams section.

const WhatWeDo: React.FC = (): React.JSX.Element => {
    return (
        <section id="whatwedo">
            <h1 id="title">
                What we do
            </h1>
            {/* Refer to what OA STEM does with their about page to remember what I want to do. */}
            <div id="secondary">
                <div id="create" className="do">
                    <img src="https://via.placeholder.com/200" alt="Create" />
                    <h1 className="title">
                        Create
                    </h1>

                    <p className="description">
                        We create engaging content on our social media channels to keep our members and community up to date with our projects.
                    </p>
                </div>

                <div id="build" className="do">
                    <img src="https://via.placeholder.com/200" alt="Build" />
                    <h1 className="title">
                        Build
                    </h1>

                    <p className="description">
                        We build and program competition-ready robots and machines.
                    </p>
                </div>

                <div id="compete" className="do">
                    <img src="https://via.placeholder.com/200" alt="Compete" />
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