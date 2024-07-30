import React from "react";
import '../../scss/globals/Footer.scss';
import logo from '../../assets/img/logo/logosmall.png';

const Footer: React.FC = (): React.JSX.Element => {
    const mailRedirect = (): void => {
        window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=contact@frc4079.org";
    }

    return (
        <section id="footer">
            <div id="container">
                <div id="footer-content">
                    <div id="footer-logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div id="footer-links">
                        <h1 id="title">Navigate</h1>
                        <div id="links">
                            <a href="/">Home</a>
                            <a href="/ourteams">Our Teams</a>
                            <a href="/whatwedo">What We Do</a>
                            <a href="/contact">Contact</a>
                        </div>
                    </div>
                    <div id="footer-services">
                        <h1 id="title">Services</h1>
                        <div id="services">
                            <a href="/inform">Inform</a>
                            <a href="/build">Build</a>
                            <a href="/compete">Compete</a>
                        </div>
                    </div>

                    <div id="footer-contact">
                        <h1 id="title">Contact</h1>
                        <div id="contact">
                            <p onClick={() => mailRedirect()}>contact@frc4079.org</p>
                            <p id="org">Oxford Academy Robotics</p>
                            <p id="address">5172 Orange Ave | Room 701</p>
                            <p id="city">Cypress, CA 90630</p>
                            <div id="gmaps">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.5570812972687!2d-118.04453358530705!3d33.8237414371854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2e98997e6095%3A0xf86122ccefa379ec!2sOxford%20Academy!5e0!3m2!1sen!2sus!4v1643523895668!5m2!1sen!2sus" width="300" height="180" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;