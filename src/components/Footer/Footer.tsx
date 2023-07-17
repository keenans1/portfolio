import React, { useState } from "react";
import Button from '@mui/material/Button';
import "./Footer.css";

const Header = () => {

    const testStyle = {
        backgroundColor: 'lightblue'
    }

    return (
        <footer>
            <p>Built with React, Typescript, CSS, MUI, HTML</p>
            <Button variant="contained" style={testStyle}>
                <a href="#top">BACK TO TOP</a>
            </Button>
        </footer>
    )
}

export default Header