import React from "react";
import '../../scss/sections/Contact.scss';

const Contact: React.FC = (): React.JSX.Element => {
    return (
        <section id="contact">
            <div id="container">
                <h1 id="title">
                    Get In Touch
                </h1>
                <h3 id="subtitle">
                    Send us a message or check out our socials!
                </h3>
                <div id="contact-info">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Subject" />
                </div>
                <textarea placeholder="Message" rows={10} cols={50} />
                <button>Submit Message</button>
            </div>
        </section>
    )
}

export default Contact;