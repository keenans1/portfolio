import React from "react";
import "./Contact.css";
import pong from "../../pong.png";

const Contact = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-title">Contact Me</h2>
            <section className="contact-content">
                <section className="contact-text-container">
                    <a href="https://www.linkedin.com/in/keenan-southall/" target="_blank" rel="noopener" className="pre-turing-projects-link">See me on LinkedIn!</a>
                    <p>Feel free to contact me via email:</p>
                    <p>keenansouthall67@gmail.com</p>
                </section>
            </section> 
        </div>
    )
}

export default Contact