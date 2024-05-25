/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import '../scss/Header.scss';
import img from '../assets/img/logo/logosmall.jpg';

const Header: React.FC = (): React.JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [headerTitles, setHeaderTitles] = React.useState<string[]>(['Home', 'About', 'Our teams', 'Our robots', 'Contact']);

    return (
        <section id="Header1">
            <nav id="HeaderMain">
                <span id="Header">
                    <img src={img} id="HeaderLogo" alt="Logo" />
                    <span id="ButtonContainer">
                        {
                            headerTitles.map((title: string, index: number) => {
                                return (
                                    <a href={`/#${title}`} key={index} className="HeaderButton">
                                        <h1>{title}</h1>
                                    </a>
                                )
                            })
                        }
                    </span>
                </span>
            </nav>
        </section>
    )
}

export default Header;