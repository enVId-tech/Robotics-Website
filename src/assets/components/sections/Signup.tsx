import React from "react";
import '../../scss/sections/Signup.scss';

const Signup: React.FC = (): React.JSX.Element => {
    const handleClick = (): void => {
        window.open("https://frc4079.org/signups", "_blank");
    }

    return (
        <section id="signup">
            <div id="container">
                <h1 id="title">
                    Sign Up
                </h1>
                <p id="subtitle">
                    Want to join our team? Sign up below!
                </p>
                <button id="signup-button" onClick={() => handleClick()}>Sign Up</button>
            </div>
        </section>
    )
}

export default Signup;