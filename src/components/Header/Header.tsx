import React, { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import "./Header.css";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const Header = () => {

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <header id="top" className={isDarkMode ? "dark-mode" : "light-mode"}>
            <section className="left-side-container" onClick={toggleTheme}>
                {isDarkMode ? <LightModeIcon fontSize="large" className="header-text-dark-mode"/> : <DarkModeIcon fontSize="large" className="header-text-light-mode"/>}
            </section>
            <section className="right-side-container">
                <div className="desktop">
                    <h3 className="header-text">About Me</h3>
                    <h3 className="header-text">Projects</h3>
                    <h3 className="header-text">Contact</h3>
                    <DarkModeIcon fontSize="large" className="header-text"/>
                </div>
                <div className="mobile">
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon fontSize="large" className={isDarkMode ? "hamburger-menu-dark-mode" : "hamburger-menu-light-mode"}/>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem sx={ isDarkMode ? {backgroundColor: 'darkgrey'} : {backgroundColor: 'white'}} onClick={handleClose}>
                            <a href="#aboutme" className={isDarkMode ? "menu-link link-dark-mode" : "menu-link link-light-mode"}>About Me</a>
                        </MenuItem>
                        <MenuItem sx={ isDarkMode ? {backgroundColor: 'darkgrey'} : {backgroundColor: 'white'}} onClick={handleClose}>
                            <a href="#projects" className={isDarkMode ? "menu-link link-dark-mode" : "menu-link link-light-mode"}>Projects</a>
                        </MenuItem>
                        <MenuItem sx={ isDarkMode ? {backgroundColor: 'darkgrey'} : {backgroundColor: 'white'}} onClick={handleClose}>
                            <a href="#contact" className={isDarkMode ? "menu-link link-dark-mode" : "menu-link link-light-mode"}>Contact</a>
                        </MenuItem>
                    </Menu>
                </div>
            </section>
        </header>
    )
}

export default Header