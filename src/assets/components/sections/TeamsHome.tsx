import React from "react";
import '../../scss/sections/TeamsHome.scss';
import FRC from '../../assets/new-img/logos/FRC.png';
import FTC from '../../assets/new-img/logos/FTC.png';
import VRC from '../../assets/new-img/logos/VRC.png';
import VIQ from '../../assets/new-img/logos/VIQ.png';

const TeamsHome: React.FC = (): React.JSX.Element => {
    const [activeTeam, setActiveTeam] = React.useState<string>('FRC');

    React.useEffect(() => {
        const handleScroll = () => {
            const teamSelector = document.getElementById('bottom-teamselector');
            const container = document.getElementById('teamshome');
            const header = document.getElementById('header');
            if (teamSelector && container) {
                if (window.scrollY + window.innerHeight >= container.offsetTop + 200) {
                    teamSelector.classList.add('active');
                    header?.classList.add('header_hide');
                } else if (window.scrollY + window.innerHeight < container.offsetTop + 200) {
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

            if (window.scrollY < 800) {
                document.getElementById('header')!.classList.remove('header_active');
            } else {
                document.getElementById('header')!.classList.add('header_active');
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
                <div id="bottom-teamselector" className="active">
                    <div className="team-selector">
                        <h1 id="team-title">{activeTeam}</h1>
                        <div id="team-selectors">
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

export default TeamsHome;