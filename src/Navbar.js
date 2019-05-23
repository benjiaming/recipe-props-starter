import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends Component {
    static defaultProps = {
        onNewRecipe: {}
    };
    static propTypes = {
        onNewRecipe: PropTypes.func.isRequired
    };
    render() {
        return (
            <div className="navbar">
                <div className="navbar-title">Recipe App</div>
                <div className="nav-menu">
                    <div className="nav-menu-item"><button onClick={this.props.onNewRecipe}>New Recipe</button></div>
                    <div className="nav-menu-item">Home</div>
                    <div className="nav-menu-item">About</div>
                    <div className="nav-menu-item">Contact Us</div> 
                </div>
            </div>
        );
    }
}

export default Navbar;
