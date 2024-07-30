import React from "react";
import '../../scss/sections/Robots.scss'
import publicityBot from '../../assets/img/team/pubbot.jpg';
import ascent from '../../assets/img/team/ascent.jpg';
import lightspeed from '../../assets/img/team/lightspeed.jpg';
import lowrider from '../../assets/img/team/lowrider.jpg';
import otis from '../../assets/img/team/otis.jpg';
import dreadnought from '../../assets/img/team/dreadnought.jpg';
import rigolleto from '../../assets/img/team/rigolleto.png';
import currentrobot from '../../assets/img/team/somerobot.png';

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
                    <div className="robot">
                        <img src={currentrobot} alt="robot" />
                        <h1 className="name">Current Robot</h1>
                        <h2 className="year">2024</h2>
                        <p className="description">This is our current robot. It was designed to be fast and agile, capable of scoring points in the Crescendo challenge.</p>
                    </div>
                    <div className="robot">
                        <img src={rigolleto} alt="robot" />
                        <h1 className="name">Rigolleto</h1>
                        <h2 className="year">2023</h2>
                        <p className="description">Rigolleto is our 2023 robot. It was designed to be fast and agile, capable of scoring points in the overture challenge.</p>
                    </div>
                    <div className="robot">
                        <img src={publicityBot} alt="robot" />
                        <h1 className="name">Publicity Bot</h1>
                        <h2 className="year">2022</h2>
                        <p className="description">Publicity Bot is our robot to promote our team. It was designed to be fast and agile, and can shoot t-shirts out of its minigun-like shooter.</p>
                    </div>
                    <div className="robot">
                        <img src={ascent} alt="robot" />
                        <h1 className="name">Ascent</h1>
                        <h2 className="year">2022</h2>
                        <p className="description">Ascent is our 2021 robot. It was designed to be fast and agile, capable of scoring points in the infinite recharge challenge.</p>
                    </div>
                    <div className="robot">
                        <img src={lightspeed} alt="robot" />
                        <h1 className="name">Lightspeed</h1>
                        <h2 className="year">2020-2021</h2>
                        <p className="description">Lightspeed is our 2019 robot. It was designed to be fast and agile, capable of scoring points in the deep space challenge.</p>
                    </div>
                    <div className="robot">
                        <img src={lowrider} alt="robot" />
                        <h1 className="name">Low Rider</h1>
                        <h2 className="year">2018</h2>
                        <p className="description">Low Rider is our 2018 robot. It was designed to be low to the ground, capable of scoring points in the power up challenge.</p>
                    </div>
                    <div className="robot">
                        <img src={otis} alt="robot" />
                        <h1 className="name">Otis</h1>
                        <h2 className="year">2017</h2>
                        <p className="description">Otis is our 2017 robot. It was designed to be tall and strong, capable of scoring points in the steam works challenge.</p>
                    </div>
                    <div className="robot">
                        <img src={dreadnought} alt="robot" />
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