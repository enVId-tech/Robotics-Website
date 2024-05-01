/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import '../scss/Header.scss';
import img from '../assets/img/logo/logosmall.jpg';

const Header: React.FC = (): React.JSX.Element => {
    return (
        <nav id="HeaderMain">
            <span id="Header">
                <img src={img} id="HeaderLogo" alt="Logo" />
                <h1>Placeholder</h1>
            </span>
        </nav>
    )
}

export default Header;