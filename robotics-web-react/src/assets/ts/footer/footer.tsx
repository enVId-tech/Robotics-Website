import React from "react";

const Footer: React.FC = (): React.JSX.Element => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div className="footer-widget">
                            <div className="logo mb-35">
                                <img src="assets/img/logo/logosmall.jpg" alt="Logo" />
                            </div>
                            <p className="desc mb-35">We are OA Robotics.</p>
                            <ul className="socials">
                                <li><a href="https://www.facebook.com/frc4079/" aria-label="facebook"><i className="lni lni-facebook-filled"></i></a></li>
                                <li><a href="https://twitter.com/frc4079" aria-label="twitter"><i className="lni lni-twitter-filled"></i></a></li>
                                <li><a href="https://www.instagram.com/frc4079/" aria-label="instagram"><i className="lni lni-instagram-filled"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UCSyzkXcWM7OoUoVKe2QF4vg" aria-label="youtube"><i className="lni lni-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 offset-xl-1 col-md-5 offset-md-1 col-sm-6">
                        <div className="footer-widget">
                            <h3>Navigate</h3>
                            <ul className="links">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#service">What We Do</a></li>
                                <li><a href="#feed">Feed</a></li>
                                <li><a href="#pricing">Sponsors</a></li>
                                <li><a href="#team">Our Robots</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6">
                        <div className="footer-widget">
                            <h3>Services</h3>
                            <ul className="links">
                                <li><a href="#service">Create</a></li>
                                <li><a href="#service">Build</a></li>
                                <li><a href="#service">Connect</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="footer-widget">
                            <h3>Contact</h3>
                            <ul>
                                <li><a href="mailto:contact@frc4079.org">contact@frc4079.org</a></li>
                                <li>Oxford Academy Robotics</li>
                                <li>5172 Orange Ave | Room 701</li>
                                <li>Cypress CA, 90630</li>
                            </ul>
                            <div className="contact_map" style={{ width: "100%", height: "150px", marginTop: "25px" }}>
                                <div className="gmap_canvas">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.5570812972687!2d-118.04453358530705!3d33.8237414371854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2e98997e6095%3A0xf86122ccefa379ec!2sOxford%20Academy!5e0!3m2!1sen!2sus!4v1643523895668!5m2!1sen!2sus" width="300" height="180" style={{border: 0}} loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right">
                    <p>Developed by <a href="https://frc4079.org" rel="nofollow noopener" target="_blank">Oxford Academy Robotics</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;