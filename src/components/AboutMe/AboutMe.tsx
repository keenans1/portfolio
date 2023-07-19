import React from "react";
import "./AboutMe.css";
import pong from "../../pong.png";

const AboutMe = () => {
    return (
        <div id="aboutme" className="main-content-display-container">
            <h2>About Me</h2>
            <section className="main-content-display-container content-box">
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