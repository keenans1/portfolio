import React, { useState } from "react";
import "./Header.css";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const customerColor = {
        backgroundColor: 'darkGrey'
    }

    return (
        <header id="top">
            <section className="left-side-container">
                <h3 className="header-text">KS</h3>
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
                        <MenuIcon fontSize="large" className="hamburger"/>
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
                        <MenuItem style={customerColor} onClick={handleClose}>
                            <a href="#aboutme">About Me</a>
                        </MenuItem>
                        <MenuItem style={customerColor} onClick={handleClose}>
                            <a href="#projects">Projects</a>
                        </MenuItem>
                        <MenuItem style={customerColor} onClick={handleClose}>
                            <a href="#contact">Contact</a>
                        </MenuItem>
                    </Menu>
                </div>
            </section>
        </header>
    )
}

export default Header