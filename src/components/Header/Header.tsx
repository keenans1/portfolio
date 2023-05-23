import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <section className="left-side-container">
                <p>Home</p>
                <p>Dark Mode</p>
            </section>
            <section className="right-side-container">
                <p>About Me</p>
                <p>Projects</p>
                <p>Contact</p>
            </section>
        </header>
    )
}

export default Header