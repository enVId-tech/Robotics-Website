/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import '../scss/Header.scss';
import img from '../assets/img/logo/logosmall.png';

const Header: React.FC = (): React.JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [headerTitles, setHeaderTitles] = React.useState<string[]>(['Home', 'About', 'What we do', 'Our teams', 'Impact', 'Sponsors', 'Our Robots', 'Contact']);

    React.useEffect((): void => {
        setHeaderTitles(['Home', 'About', 'What we do', 'Our teams', 'Impact', 'Sponsors', 'Our Robots', 'Contact']);
    }, []);

    return (
        <section id="Header1">
            <nav id="HeaderMain">
                <span id="Header">
                    <a href="/#" id="HeaderTitle">
                        <img src={img} id="HeaderLogo" alt="Logo" />
                    </a>
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