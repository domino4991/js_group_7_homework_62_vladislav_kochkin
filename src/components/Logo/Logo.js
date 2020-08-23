import React from 'react';
import './Logo.css';
import {NavLink} from "react-router-dom";
import {FaReact} from "react-icons/fa";

const Logo = () => (
    <NavLink
        to="/"
        exact
        className="Logo"
    >
        <FaReact />
    </NavLink>
);

export default Logo;