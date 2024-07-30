import React from "react";
import '../../scss/sections/Impact.scss';
import collage from '../../assets/img/about/collage.png';

interface Info {
    image?: string;
    statistic: string;
    description: string;
}

const Impact: React.FC = (): React.JSX.Element => {
    const info: Info[] = [
        {
            image: "",
            statistic: "52",
            description: "Students",
        },
        {
            image: "",
            statistic: "10",
            description: "FRC Robotics Built",
        },
        {
            image: "",
            statistic: "13",
            description: "Industry Mentors",
        },
        {
            image: "",
            statistic: "12",
            description: "Active Alumni",
        }
    ]

    return (
        <section id="impact">
            <div id="container">
                <div id="left">
                    <div id="left-top">
                        <h1 id="title">Our Impact</h1>
                        <p id="description">Our team raises awareness about STEM, as the only FRC Team in the Anaheim Union High School District.</p>
                    </div>
                    <div id="left-bottom">
                        {info.map((data: Info, index: number) => {
                            return (
                                <div key={index} className="info">
                                    {
                                        data.image ? <img src={data.image} alt="Impact" /> : null
                                    }
                                    <h1 className="statistic">{data.statistic}</h1>
                                    <p className="description">{data.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div id="right">
                    <img src={collage} alt="Impact" />  
                </div>
            </div>
        </section>
    )
}

export default Impact;