import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.scss";


Nav.propTypes = {

};

function Nav(props) {
    return (
        <ul>
            <li><NavLink exact={true} to="/">Home</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><NavLink to="/weather">Weather App</NavLink></li>
            <li><NavLink to="/otp">OTP</NavLink></li>
        </ul>
    );
}

export default Nav;