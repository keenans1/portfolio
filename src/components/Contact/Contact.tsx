import React, { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import "./Contact.css";

const Contact = () => {

    const { isDarkMode } = useContext(ThemeContext);

    const customHeight = {
        paddingBottom: '10%'
    }

    return (
        <div id="contact" style={customHeight} className="main-content-display-container">
            <h2>Contact Me</h2>
            <section className="main-content-display-container content-box">
                <section className="main-content-display-container content-padding">
                    <a href="https://www.linkedin.com/in/keenan-southall/" target="_blank" rel="noopener" className={isDarkMode ? "link-dark-mode" : "link-light-mode"}>See me on LinkedIn!</a>
                    <p>Feel free to contact me via email:</p>
                    <p>keenansouthall67@gmail.com</p>
                </section>
            </section> 
        </div>
    )
}

export default Contact