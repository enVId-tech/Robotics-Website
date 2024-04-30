/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import '../scss/Header.scss';
const img = require('../assets/img/logo/logo.svg');

const Header: React.FC = (): React.JSX.Element => {
    return (
        <span id="Header">
            <img src={img} id="HeaderLogo" alt="Logo" />
        </span>
    )
}

export default Header;