import React from "react";
import '../../scss/sections/WhatWeDo.scss';

const WhatWeDo: React.FC = (): React.JSX.Element => {
    return (
        <section id="whatwedo">
            <h1 id="title">
                What we do
            </h1>
            <div id="secondary">
                <div id="create" className="do">
                    <img src="https://via.placeholder.com/500" alt="Create" />
                    <h1 className="title">
                        Create
                    </h1>
                    <p className="description">

                    </p>
                </div>
                <div id="build" className="do">
                    <img src="https://via.placeholder.com/500" alt="Build" />
                    <h1 className="title">
                        Build
                    </h1>
                    <p className="description">

                    </p>
                </div>
                <div id="compete" className="do">
                    <img src="https://via.placeholder.com/500" alt="Compete" />
                    <h1 className="title">
                        Compete
                    </h1>
                    <p className="description">
                        
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo;