/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import '../scss/Header.scss';
import img from '../assets/img/logo/logosmall.jpg';

const Header: React.FC = (): React.JSX.Element => {
    return (
        <nav id="HeaderMain">
            <span id="Header">
                <img src={img} id="HeaderLogo" alt="Logo" />
                <span id="ButtonContainer">
                    <a href="/#Home" className="HeaderButton">
                        <h1>Home</h1>
                    </a>
                    <a href="/#About" className="HeaderButton">
                        <h1>About</h1>
                    </a>
                    <a href="/#Projects" className="HeaderButton">
                        <h1>Projects</h1>
                    </a>
                    <a href="/#Contact" className="HeaderButton">
                        <h1>Contact</h1>
                    </a>
                </span>
            </span>
        </nav>
    )
}

export default Header;