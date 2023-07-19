import React, { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import Button from '@mui/material/Button';
import "./Footer.css";

const Header = () => {

    const { isDarkMode } = useContext(ThemeContext);

    return (
        <footer className={isDarkMode ? "main-content-display-container footer-dark-mode" : "main-content-display-container footer-light-mode"}>
            <p>Built with React, Typescript, CSS, MUI, HTML</p>
            <Button variant="contained" sx={ isDarkMode ? {backgroundColor: '#000065'} : {backgroundColor: 'lightblue'}}>
                <a href="#top">BACK TO TOP</a>
            </Button>
        </footer>
    )
}

export default Header