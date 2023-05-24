import React from "react";
import "./Header.css";
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = () => {
    return (
        <header>
            <section className="left-side-container">
                <HomeIcon fontSize="large" className="header-text"/>
                <h3 className="header-text">About Me</h3>
                <h3 className="header-text">Projects</h3>
                <h3 className="header-text">Contact</h3>
            </section>
            <section className="right-side-container">
                <DarkModeIcon fontSize="large" className="header-text"/>
            </section>
        </header>
    )
}

export default Header