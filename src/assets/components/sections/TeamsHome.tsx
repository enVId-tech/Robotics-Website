import React from "react";
import '../../scss/sections/TeamsHome.scss';

const TeamsHome: React.FC = (): React.JSX.Element => {
    return (
        <section id="teamshome">
            <div id="container">
                <div className="team">
                    <img src="" alt="Team" />
                    <h1 className="title">FRC Team 4079</h1>
                    <p className="description">Our Premiere FIRST Robotics Competition team, Quantum Leap, competes in the FRC competition.</p>
                </div>
            </div>
        </section>
    )
}

export default TeamsHome;