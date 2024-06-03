import React from "react";
import '../../scss/sections/Teams.scss';

const Teams: React.FC = (): React.JSX.Element => {
    return (
        <section id="teams">
            <div id="container">
                <div className="team">
                    <img src="https://via.placeholder.com/200" alt="Team" />
                    <h1 className="title">Team 4079</h1>
                    <p className="description">Our FIRST Robotics Competition team, Quantum Leap, competes in the FRC competition.</p>
                </div>
                <div className="team">
                    <img src="https://via.placeholder.com/200" alt="Team" />
                    <h1 className="title">Team 1774</h1>
                    <p className="description">Our Vex Robotics Competition team, Quantum Leap, competes in the VRC competition.</p>
                </div>
                <div className="team">
                    <img src="https://via.placeholder.com/200" alt="Team" />
                    <h1 className="title">Team 18218</h1>
                    <p className="description">Our FIRST Tech Challenge team, Quantum Leap, competes in the FTC competition.</p>
                </div>
            </div>
        </section>
    )
}

export default Teams;