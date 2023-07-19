import React, { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import Button from '@mui/material/Button';
import "./Footer.css";

const Header = () => {

    const { isDarkMode } = useContext(ThemeContext);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const buttonStyles = {
        backgroundColor: isDarkMode ? '#000065' : 'lightblue',
    };

    return (
        <footer className={isDarkMode ? "main-content-display-container footer-dark-mode" : "main-content-display-container footer-light-mode"}>
            <p>Built with React, Typescript, Context API, CSS, MUI, HTML</p>
            <Button variant="contained" style={buttonStyles}>
                <a href="#top" className={isDarkMode ? "footer-link link-dark-mode" : "footer-link link-light-mode"} onClick={handleClick}>BACK TO TOP</a>
            </Button>
        </footer>
    )
}

export default Header