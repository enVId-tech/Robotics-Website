import React from "react";

const Header: React.FC = (): React.JSX.Element => {
    return (
        <header className="header">
            <nav className="navbar-area sticky">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img src="assets/img/logo/logo.svg" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggler-icon"></span>
                        <span className="toggler-icon"></span>
                        <span className="toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                        <ul id="nav" className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="page-scroll" href="#home">Home</a></li>
                            <li className="nav-item"><a className="page-scroll" href="#about">About</a></li>
                            <li className="nav-item"><a className="page-scroll" href="#service">What We Do</a></li>
                            <li className="nav-item"><a className="page-scroll" href="#feed">Feed</a></li>
                            <li className="nav-item"><a className="page-scroll" href="#pricing">Sponsors</a></li>
                            <li className="nav-item"><a className="page-scroll" href="#team">Our Robots</a></li>
                            <li className="nav-item"><a className="page-scroll" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;