import React from "react";
import '../../scss/sections/Sponsors.scss';
import nasa from "../../assets/new-img/NASA.png";
import disney from "../../assets/new-img/Disney.jpeg";
import genehaas from "../../assets/new-img/GeneHaas.webp";
import solidworks from "../../assets/new-img/Solidworks.png";
import msi from "../../assets/new-img/MSI.png";
import argosy from "../../assets/new-img/ArgosyFoundation.jpeg";
import goengineer from "../../assets/new-img/GoEngineer.jpeg";
import emerson from "../../assets/new-img/Emerson.jpeg";

const Sponsors: React.FC = (): React.JSX.Element => {
    const mailRedirect = (): void => {
        window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=contact@frc4079.org";
    }

    return (
        <section id="sponsors">
            <div id="container">
                <div id="top">
                    <div id="top-left">
                        <h1 id="title">A Special Thanks to Our Sponsors</h1>
                        <p id="description">Without our sponsors, our accomplishments would not have been achievable. Competition and off-season events are successful thanks to the gracious funding and support from our sponsors over the years.</p>
                    </div>
                    <button id="sponsor-button">Become a Sponsor</button>
                </div>

                <hr />

                <div id="middle">
                    <div id="platinum">
                        <h1 id="title">Platinum</h1>

                        <div id="platinum-sponsors">
                            <img src={nasa} alt="sponsor" />
                            <img src={disney} alt="sponsor" />
                            <img src={genehaas} alt="sponsor" />
                            <img src={solidworks} alt="sponsor" />
                        </div>
                    </div>

                    <div id="gold">
                        <h1 id="title">Gold</h1>

                        <div id="gold-sponsors">
                            <img src={msi} alt="sponsor" />                        </div>
                    </div>

                    <div id="silver">
                        <h1 id="title">Silver</h1>

                        <div id="silver-sponsors">
                            <img src={argosy} alt="sponsor" />
                        </div>
                    </div>

                    <div id="bronze">
                        <h1 id="title">Bronze</h1>

                        <div id="bronze-sponsors">
                            <img src={goengineer} alt="sponsor" />
                            <img src={emerson} alt="sponsor" />
                        </div>
                    </div>
                    <div id="extras">
                        <h1 id="title">Other Sponsors</h1>

                        <div id="extra-sponsors">
                            <p>Alonso Family</p>
                            <p>Stephan Family</p>
                            <p>Jang Family</p>
                            <p>Li Family</p>
                            <p>Anaheim Union High School District</p>
                        </div>
                    </div>
                </div>

                <div id="bottom">
                    <span id="left">
                        <h1 id="title">How to Apply</h1>
                        <p id="description">Considering the amount of money that is required to build an effective robot, sponsors are absolutely necessary. Donations of any kind are greatly appreciated. OA Robotics has developed a variety of rewards for donations of all sizes listed to the side. Donations under $1000 dollars in value are recognized with mentions on the team website, as well as invitations to team sponsored events. If you are thinking about donating, please contact us at 
                            <h1 onClick={() => mailRedirect()} id="redirectLink">contact@frc4079.org</h1>
                        </p>
                    </span>
                    <div id="right">
                        <div className="package">
                            <h1 className="title">Bronze</h1>
                            <h4>$1000{`>`}</h4>
                            <p className="description">Donations under $1000 dollars in value are recognized with mentions on the team website, as well as invitations to team sponsored events.</p>
                        </div>
                        <div className="package">
                            <h1 className="title">Silver</h1>
                            <h4>$1000 - $5000</h4>
                            <p className="description">Donations between $1000 and $5000 dollars in value are recognized with mentions on the team website, invitations to team sponsored events, and a small logo on the robot.</p>
                        </div>
                        <div className="package">
                            <h1 className="title">Gold</h1>
                            <h4>$5000 - $10000</h4>
                            <p className="description">Donations between $5000 and $10000 dollars in value are recognized with mentions on the team website, invitations to team sponsored events, a medium logo on the robot, and a small logo on the team shirts.</p>
                        </div>
                        <div className="package">
                            <h1 className="title">Platinum</h1>
                            <h4>$10000{`<`}</h4>
                            <p className="description">Donations over $10000 dollars in value are recognized with mentions on the team website, invitations to team sponsored events, a large logo on the robot, a medium logo on the team shirts, and a large logo on the team banner.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors;