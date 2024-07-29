import React from "react";
import '../../scss/sections/Robots.scss'

const Robots: React.FC = (): React.JSX.Element => {
    return (
        <section id="robots">
            <div id="container">
                <h1 id="title">
                    Meet our Robots
                </h1>
                <h3 id="description">
                    Our team has been creating robots since 2012. Each one is unique and tailored to meet the needs of the seasonal FIRST® challenge. Meet Lightspeed, Low Rider, Otis, and Dreadnought, and more!
                </h3>
                <div id="robots">
                    <div className="robot"></div>
                    <div className="robot">
                        <img src="https://via.placeholder.com/300" alt="robot" />
                        <h1 className="name">Publicity Bot</h1>
                        <h2 className="year">2022</h2>
                        <p className="description">Lightspeed is our 2019 robot. It was designed to be fast and agile, capable of scoring points in the deep space challenge.</p>
                    </div>
                    <div className="robot">
                        <img src="https://via.placeholder.com/300" alt="robot" />
                        <h1 className="name">Ascent</h1>
                        <h2 className="year">2022</h2>
                        <p className="description">Lightspeed is our 2019 robot. It was designed to be fast and agile, capable of scoring points in the deep space challenge.</p>
                    </div>
                    <div className="robot" />
                    <div className="robot">
                        <img src="https://via.placeholder.com/300" alt="robot" />
                        <h1 className="name">Lightspeed</h1>
                        <h2 className="year">2020-2021</h2>
                        <p className="description">Lightspeed is our 2019 robot. It was designed to be fast and agile, capable of scoring points in the deep space challenge.</p>
                    </div>
                    <div className="robot">
                        <img src="https://via.placeholder.com/300" alt="robot" />
                        <h1 className="name">Low Rider</h1>
                        <h2 className="year">2018</h2>
                        <p className="description">Low Rider is our 2018 robot. It was designed to be low to the ground, capable of scoring points in the power up challenge.</p>
                    </div>
                    <div className="robot">
                        <img src="https://via.placeholder.com/300" alt="robot" />
                        <h1 className="name">Otis</h1>
                        <h2 className="year">2017</h2>
                        <p className="description">Otis is our 2017 robot. It was designed to be tall and strong, capable of scoring points in the steam works challenge.</p>
                    </div>
                    <div className="robot">
                        <img src="https://via.placeholder.com/300" alt="robot" />
                        <h1 className="name">Dreadnought</h1>
                        <h2 className="year">2016</h2>
                        <p className="description">Dreadnought is our 2016 robot. It was designed to be heavy and powerful, capable of scoring points in the stronghold challenge.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Robots;