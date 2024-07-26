import React from "react";
import '../../scss/sections/TeamsHome.scss';

const TeamsHome: React.FC = (): React.JSX.Element => {
    return (
        <section id="teamshome">
            <div id="container">
                <div className="team">
                    <img src="" alt="Team" />
                    <img src="" alt="FIRST Robotics Competition" />
                    <div className="team-info">
                        <h1 className="title">Team 4079</h1>
                        <p className="description">Our Premiere FIRST Robotics Competition team, Quantum Leap, competes in the FRC competition.</p>
                    </div>
                </div>
                <div className="team">
                    <img src="" alt="Team" />
                    <img src="" alt="FIRST Tech Challenge" />
                    <div className="team-info">
                        <h1 className="title">FTC Team 19152A</h1>
                        <p className="description">Our FIRST Tech Challenge team, Quantum Leap, competes in the FTC competition.</p>
                    </div>
                    <div className="team-info">
                        <h1 className="title">FTC Team 19152B</h1>
                        <p className="description">Our FIRST Tech Challenge team, Quantum Leap, competes in the FTC competition.</p>
                    </div>
                </div>
                <div className="team">
                    <img src="" alt="Team" />
                    <img src="" alt="Vex Robotics" />
                    <h1 className="title">VRC Team 1774</h1>
                    <p className="description">Our Vex Robotics Competition team, Quantum Leap, competes in the VRC competition.</p>
                </div>
            </div>
        </section>
    )
}

export default TeamsHome;