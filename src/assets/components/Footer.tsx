import React from "react";
import '../scss/Footer.scss';

const Footer: React.FC = (): React.JSX.Element => {
    return (
        <section id="footer">
            <div id="left">
                <p id="name"><a id="self-credit" href="https://github.com/enVId-tech" target="_blank" rel="noopener">Erick Tran</a></p>
                <p id="accreditation">Built for exclusive use for OA Robotics</p>
                <p id="year">OA Robotics Website &copy; 2024</p>
            </div>
            <div id="right">
                <p id="bugs_warning">This is an ALPHA build, bugs beware!</p>
                <p id="update_name">Update 28 - May 30, 2024</p>
            </div>
        </section>
    );
}

export default Footer;