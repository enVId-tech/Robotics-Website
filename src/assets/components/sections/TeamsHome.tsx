import React from "react";
import '../../scss/sections/TeamsHome.scss';
import FRC from '../../assets/new-img/logos/FRC.png';
import FTC from '../../assets/new-img/logos/FTC.png';
import VRC from '../../assets/new-img/logos/VRC.png';
import VIQ from '../../assets/new-img/logos/VIQ.png';

const TeamsHome: React.FC = (): React.JSX.Element => {
    return (
        <section id="teamshome">
            <div id="container">
                <div className="team">
                    <div className="team-info">
                        <img src={FRC} alt="FIRST Robotics Competition" />
                        <h1 className="title">Team 4079</h1>
                        <p className="description">Our premiere FIRST Robotics Competition team, Quantum Leap, competes in the FRC competition.</p>
                    </div>
                </div>
                <div className="team">
                    <div className="team-info">
                        <img src={FTC} alt="FIRST Tech Challenge" />
                        <h1 className="title">Team 19152A</h1>
                        <p className="description">Our FIRST Tech Challenge team, Quantum Leap, competes in the FTC competition.</p>
                    </div>
                    <div className="team-info">
                        <img src={FTC} alt="FIRST Tech Challenge" />
                        <h1 className="title">Team 19152B</h1>
                        <p className="description">Our FIRST Tech Challenge team, Quantum Leap, competes in the FTC competition.</p>
                    </div>
                </div>
                <div className="team">
                    <div className="team-info">
                        <img src={VRC} alt="Vex Robotics Competition" />
                        <h1 className="title">Team 1</h1>
                        <p className="description">Our Vex Robotics Competition team, Quantum Leap, competes in the VRC competition.</p>
                    </div>
                </div>
                <div className="team">
                    <div className="team-info">
                        <img src={VIQ} alt="Vex IQ" />
                        <h1 className="title">Team 1</h1>
                        <p className="description">Our Vex IQ team, Quantum Leap, competes in the VIQ competition.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamsHome;