import React from "react";
import '../../scss/sections/Impact.scss';

interface Info {
    statistic: string;
    description: string;
}

const Impact: React.FC = (): React.JSX.Element => {
    const info: Info[] = [
        {
            statistic: "52",
            description: "Students",
        },
        {
            statistic: "10",
            description: "FRC Robotics Built",
        },
        {
            statistic: "13",
            description: "Industry Mentors",
        },
        {
            statistic: "12",
            description: "Active Alumni",
        }
    ]

    return (
        <section id="impact">
            <div id="container">
                <div id="left">
                    <div id="left-top">
                        <h1 className="title">Our Impact</h1>
                        <p className="description">Our team raises awareness about STEM, as the only FRC Team in the Anaheim Union High School District.</p>
                    </div>
                    <div id="left-bottom">
                        {info.map((data: Info, index: number) => {
                            return (
                                <div key={index} className="info">
                                    <h1 className="statistic">{data.statistic}</h1>
                                    <p className="description">{data.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div id="right">

                </div>
            </div>
        </section>
    )
}

export default Impact;