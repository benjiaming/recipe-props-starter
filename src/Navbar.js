import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-title">Recipe App</div>
                <div className="nav-menu">
                    <div className="nav-menu-item">New Recipe</div>
                    <div className="nav-menu-item">Home</div>
                    <div className="nav-menu-item">About</div>
                    <div className="nav-menu-item">Contact Us</div> 
                </div>
            </div>
        );
    }
}

export default Navbar;
