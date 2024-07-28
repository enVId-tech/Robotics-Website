import React from "react";
import '../../scss/sections/Sponsers.scss';

const Sponsers: React.FC = (): React.JSX.Element => {
    return (
        <section id="sponsers">
            <div id="container">
                <div id="top">
                    <div id="top-left">
                        <h1 id="title">A Special Thanks to Our Sponsors</h1>
                        <p id="description">Without our sponsors, our accomplishments would not have been achievable. Competition and off-season events are successful thanks to the gracious funding and support from our sponsors over the years.</p>
                    </div>
                    <button id="sponser-button">Become a Sponsor</button>
                </div>

                <hr />

                <div id="middle">
                    <div id="platinum">
                        <h1 id="title">Platinum</h1>

                        <div id="platinum-sponsers">
                            <img src="https://via.placeholder.com/300" alt="Sponser" />
                            <img src="https://via.placeholder.com/300" alt="Sponser" />
                        </div>
                    </div>

                    <div id="gold">
                        <h1 id="title">Gold</h1>

                        <div id="gold-sponsers">
                            <img src="https://via.placeholder.com/300" alt="Sponser" />
                            <img src="https://via.placeholder.com/300" alt="Sponser" />
                        </div>
                    </div>

                    <div id="silver">
                        <h1 id="title">Silver</h1>

                        <div id="silver-sponsers">
                            <img src="https://via.placeholder.com/300" alt="Sponser" />
                            <img src="https://via.placeholder.com/300" alt="Sponser" />
                        </div>
                    </div>

                    <div id="bronze">
                        <h1 id="title">Bronze</h1>

                        <div id="bronze-sponsers">
                            <img src="https://via.placeholder.com/300" alt="Sponser" />
                            <img src="https://via.placeholder.com/300" alt="Sponser" />
                        </div>
                    </div>
                </div>

                <div id="bottom">
                    <div id="left">
                        <h1 id="title">How to Apply</h1>
                        <p id="description">Considering the amount of money that is required to build an effective robot, sponsors are absolutely necessary. Donations of any kind are greatly appreciated. OA Robotics has developed a variety of rewards for donations of all sizes listed to the side. Donations under $1000 dollars in value are recognized with mentions on the team website, as well as invitations to team sponsored events. If you are thinking about donating, please contact us at <a href="mailto:contact@frc4079.org">contact@frc4079.org</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsers;