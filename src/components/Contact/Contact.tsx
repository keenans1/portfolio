import React from "react";
import "./Contact.css";
import pong from "../../pong.png";

const Contact = () => {
    // is the parent div even necessary? maybe just use a fragment, we will see
    return (
        <div className="contact-container">
            <h2 className="contact-title">About Me</h2>
            <section className="contact-content">
                <img src={pong} className="pong-image" alt="me playing ping pong"/>
                <section className="contact-text">
                    <p>text</p>
                    <p>text</p>
                    <p>text</p>
                </section>
            </section> 
        </div>
    )
}

export default Contact