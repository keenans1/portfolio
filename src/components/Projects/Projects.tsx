import React from "react";
import "./Projects.css";
import pong from "../../pong.png";

const Projects = () => {
    // is the parent div even necessary? maybe just use a fragment, we will see
    return (
        <div className="projects-container">
            <h2 className="projects-title">About Me</h2>
            <section className="projects-content">
                <img src={pong} className="pong-image" alt="me playing ping pong"/>
                <section className="projects-text">
                    <p>text</p>
                    <p>text</p>
                    <p>text</p>
                </section>
            </section> 
        </div>
    )
}

export default Projects