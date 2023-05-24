import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <h2 className="about-me-title">About Me</h2>
            <section className="individual-container">
                {/* <img src="https://www.flickr.com/photos/koiloy/51556516074/"/> */}
                <div className="pong-img"></div>
                <p>heres an image</p>
            </section>
            <section className="individual-container">
                {/* <img src="https://www.flickr.com/photos/koiloy/51556516074/"/> */}
                <div className="pong-img"></div>
                <p>heres an image</p>
            </section>
        </div>
    )
}

export default AboutMe