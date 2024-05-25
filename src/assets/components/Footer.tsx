import React from "react";
import '../scss/Footer.scss';

const Footer: React.FC = (): React.JSX.Element => {
    return (
        <section id="footer">
            <div id="left">
                <p id="name">Erick Tran</p>
                <p id="accreditation">Built for exclusive use for OA Robotics</p>
                <p id="year">&copy; 2024</p>
            </div>
            <div id="right">
                <p id="bugs_warning">This is an ALPHA build, bugs beware!</p>
            </div>
        </section>
    );
}

export default Footer;