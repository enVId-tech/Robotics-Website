import React from "react";
import '../../scss/sections/TeamsHome.scss';
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

const TeamsHome: React.FC = (): React.JSX.Element => {
    const [activeTeam, setActiveTeam] = React.useState<string>('FRC');

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

    React.useEffect(() => {
        const handleScroll = () => {
            const teamSelector = document.getElementById('bottom-teamselector');
            const container = document.getElementById('teamshome');
            const header = document.getElementById('header');
            if (teamSelector && container) {
                if (window.scrollY + window.innerHeight >= container.offsetTop + 600) {
                    teamSelector.classList.add('active');
                    header?.classList.add('header_hide');
                } else if (window.scrollY + window.innerHeight < container.offsetTop + 600) {
                    teamSelector.classList.remove('active');
                    header?.classList.remove('header_hide');
                } else if (window.scrollY + window.innerHeight > container.offsetHeight) {
                    teamSelector.classList.remove('active');
                    header?.classList.remove('header_hide');
                } else {
                    teamSelector.classList.remove('active');
                    header?.classList.remove('header_hide');
                }
            }
        }


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [window.scrollY])

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
            </div>
        </section>
    )
}

export default TeamsHome;