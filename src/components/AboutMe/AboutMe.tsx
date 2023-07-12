import React from "react";
import "./AboutMe.css";
import pong from "../../pong.png";

const AboutMe = () => {
    // is the parent div even necessary? maybe just use a fragment, we will see
    return (
        <div className="about-me-container">
            <h2 className="about-me-title">About Me</h2>
            <section className="about-me-content">
                <img src={pong} className="pong-image" alt="me playing ping pong"/>
                <section className="about-me-text-container">
                    <p className="test-class-text">I love to play/coach table tennis, box, weightlift and hike!</p>
                    <p className="test-class-text">I played professionaly in Europe as well as winning various tournaments/events including a US Open medal</p>
                    <p className="test-class-text">In my free time, you'll see me in the mountains or in nature soaking up the sun</p>
                </section>
            </section> 
        </div>
    )
}

export default AboutMe;