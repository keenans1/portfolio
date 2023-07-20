import React, { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import "./AboutMe.css";
import pong from "../../pong.png";

const AboutMe = () => {

    const { isDarkMode } = useContext(ThemeContext);

    const containerBorder = {
        border: isDarkMode ? 'solid white 1px' : 'solid black 1px'
    }

    return (
        <div id="aboutme" className="main-content-display-container">
            <h2>About Me</h2>
            <section className="main-content-display-container content-box" style={containerBorder}>
                <img src={pong} className="content-image" alt="me playing ping pong"/>
                <section className="content-padding">
                    <p>I love to play/coach table tennis, box, weightlift and hike!</p>
                    <p>I played professionaly in Europe as well as winning various tournaments/events, including a US Open medal.</p>
                    <p>In my free time, you'll see me in the mountains or in nature soaking up the sun.</p>
                </section>
            </section> 
        </div>
    )
}

export default AboutMe;