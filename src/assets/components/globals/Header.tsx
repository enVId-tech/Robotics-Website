/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import '../../scss/Header.scss';
import img from '../../assets/img/logo/logosmall.png';

const Header: React.FC = (): React.JSX.Element => {
    const [headerTitles, setHeaderTitles] = React.useState<string[]>([]);
    const [sections, setSections] = React.useState<string[]>([]);
    const [currentSection, setCurrentSection] = React.useState<string>('');
    const [sectionIDs, setSectionIDs] = React.useState<string[]>([]);

    React.useEffect((): void => {
        // exclude the header section and the footer section
        setSections(document.querySelectorAll('section').length > 0 ? Array.from(document.querySelectorAll('section')).map((section: Element) => section.id).filter((section: string) => section !== 'header' && section !== 'footer') : []);
        console.log(sections);
        setHeaderTitles(['Home', 'About', 'What we do', 'Our teams', 'Impact', 'Sponsors', 'Our Robots', 'Contact']);
        setSectionIDs(Array.from(document.querySelectorAll('section')).map(section => section.id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    document.addEventListener('scroll', (): void => {
        sections.forEach((section: string) => {
            if (window.scrollY >= document.getElementById(section)!.offsetTop) {
                setCurrentSection(section);
            }
        });
    });

    return (
        <section id="header">
            <nav id="HeaderMain">
                <span id="Header">
                    <a href="/#" id="HeaderTitle">
                        <img src={img} id="HeaderLogo" alt="Logo" />
                    </a>
                    <span id="ButtonContainer">
                        {
                            headerTitles.map((title: string, index: number) => {
                                return (
                                    <a href={`/#${title}`} className={`HeaderButton`} key={index}>
                                        <h1 className={`${sectionIDs[index] === currentSection ? 'header_active' : ''}`}>{title}</h1>
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