/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import '../scss/Header.scss';
import img from '../assets/img/logo/logosmall.jpg';

const Header: React.FC = (): React.JSX.Element => {
    const [hovered, setHovered] = React.useState<boolean[]>([]);
    const [headerTitles, setHeaderTitles] = React.useState<string[]>(['Home', 'About', 'Projects', 'Contact']);

    React.useEffect(() => {
        const newHovered: boolean[] = [];
        headerTitles.forEach(() => newHovered.push(false));
        setHovered(newHovered);
    }, [headerTitles]);

    const handleMouse = (index: number, value: boolean) => {
        const newHovered = hovered.map((hover, i) => i === index ? value : hover);
        setHovered(newHovered);
    }

    return (
        <nav id="HeaderMain">
            <span id="Header">
                <img src={img} id="HeaderLogo" alt="Logo" />
                <span id="ButtonContainer">
                    {
                        headerTitles.map((title: string, index: number) => {
                            return (
                                <a href={`/#${title}`} key={index} className="HeaderButton" onMouseEnter={() => handleMouse(index, true)} onMouseLeave={() => handleMouse(index, false)}>
                                    <h1>{title}</h1>
                                </a>
                            )
                        })
                    }
                </span>
            </span>
        </nav>
    )
}

export default Header;