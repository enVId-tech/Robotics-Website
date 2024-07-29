import React from "react";
import '../../scss/pages/teamspage.scss';
import FRC from '../../assets/new-img/logos/FRC.png';
import FTC from '../../assets/new-img/logos/FTC.png';
import VRC from '../../assets/new-img/logos/VRC.png';
import VIQ from '../../assets/new-img/logos/VIQ.png';

interface Team {
    team: string;
    description: string;
    image?: string;
}

interface Descriptor<T = Team[]> {
    title: string;
    teams: T;
}

const Teams: React.FC = (): React.JSX.Element => {
    const [activeTeam, setActiveTeam] = React.useState<string>('FRC');
    const [offset, setOffset] = React.useState<number>(0);

    const descriptorsTemp: Descriptor[] = [
        {
            title: "FRC",
            teams: [
                {
                    team: "4079",
                    description: "Our premiere FIRST Robotics Competition team, Quantum Leap, competes in the FRC competition.",
                    image: FRC,
                }
            ]
        },
        {
            title: "FTC",
            teams: [
                {
                    team: "19152A",
                    description: "Our FIRST Tech Challenge team, Quantum Leap, competes in the FTC competition.",
                    image: FTC,
                },
                {
                    team: "19152B",
                    description: "Our FIRST Tech Challenge team, Quantum Leap, competes in the FTC competition.",
                    image: FTC,
                }
            ]
        },
        {
            title: "VRC",
            teams: [
                {
                    team: "1",
                    description: "Our Vex Robotics Competition team, Quantum Leap, competes in the VRC competition.",
                    image: VRC,
                }
            ]
        },
        {
            title: "VIQ",
            teams: [
                {
                    team: "1",
                    description: "Our Vex IQ team, Quantum Leap, competes in the VIQ competition.",
                    image: VIQ,
                }
            ]
        }
    ]

    window.addEventListener('scroll', (): void => {
        const teamSelector = document.getElementById('bottom-teamselector');
        const container = document.getElementById('teamshome');
        const header = document.getElementById('header');
        setOffset(600);

        if (teamSelector && container) {
            if (window.scrollY + window.innerHeight > container.offsetTop + container.offsetHeight + offset) {
                teamSelector.classList.remove('active');
                header?.classList.remove('header_hide');
            } else if (window.scrollY + window.innerHeight >= container.offsetTop + offset) {
                teamSelector.classList.add('active');
                header?.classList.add('header_hide');
            } else if (window.scrollY + window.innerHeight < container.offsetTop + (offset * (1 / 3))) {
                teamSelector.classList.remove('active');
                header?.classList.remove('header_hide');
            } else {
                teamSelector.classList.remove('active');
                header?.classList.remove('header_hide');
            }
        }
    });

    return (
        <section id="teamshome">
            <div id="container">
                {
                    descriptorsTemp.map((descriptor: Descriptor, index: number): React.JSX.Element => {
                        return (
                            <div key={index} className={`team ${activeTeam === descriptor.title ? 'active' : ''}`} id={descriptor.title}>
                                <div className="team-info">
                                    {
                                        descriptor.teams.map((team: Team, index: number): React.JSX.Element => {
                                            return (
                                                <div key={index} className={`team-info-desc ${activeTeam === descriptor.title ? 'active' : ''}`}>
                                                    <img src={team.image} alt="Team" />
                                                    <h1 className="title">Team {team.team}</h1>
                                                    <p className="description">{team.description}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <div id="bottom-teamselector">
                    <div className="team-selector">
                        <h1 id="team-title">{activeTeam}</h1>
                        <div id="team-selectors">
                            <hr />
                            <button className={`team-button ${activeTeam === 'FRC' ? 'active' : ''}`} onClick={(): void => setActiveTeam('FRC')} id="FRC" />
                            <button className={`team-button ${activeTeam === 'FTC' ? 'active' : ''}`} onClick={(): void => setActiveTeam('FTC')} id="FTC" />
                            <button className={`team-button ${activeTeam === 'VRC' ? 'active' : ''}`} onClick={(): void => setActiveTeam('VRC')} id="VRC" />
                            <button className={`team-button ${activeTeam === 'VIQ' ? 'active' : ''}`} onClick={(): void => setActiveTeam('VIQ')} id="VIQ" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Teams;