import React from "react";
import "./Contact.css";

const Contact = () => {

    const customHeight = {
        paddingBottom: '10%'
    }

    return (
        <div id="contact" style={customHeight} className="main-content-display-container">
            <h2>Contact Me</h2>
            <section className="main-content-display-container content-box">
                <section className="main-content-display-container content-padding">
                    <a href="https://www.linkedin.com/in/keenan-southall/" target="_blank" rel="noopener" className="pre-turing-projects-link">See me on LinkedIn!</a>
                    <p>Feel free to contact me via email:</p>
                    <p>keenansouthall67@gmail.com</p>
                </section>
            </section> 
        </div>
    )
}

export default Contact