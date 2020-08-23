import React from 'react';
import './Sidebar.css';
import {NavLink} from "react-router-dom";
import Logo from "../Logo/Logo";

const Sidebar = React.memo(() => {
    return (
        <aside className="Aside">
            <Logo />
            <nav className="Nav">
                <ul className="Nav-list">
                    <li className="Nav-item">
                        <NavLink
                            to="/"
                            exact
                            className="Nav-link"
                            activeClassName="active-menu"
                        >Home</NavLink>
                    </li>
                    <li className="Nav-item">
                        <NavLink
                            to="/products"
                            className="Nav-link"
                            activeClassName="active-menu"
                        >Products</NavLink>
                    </li>
                    <li className="Nav-item">
                        <NavLink
                            to="/about"
                            className="Nav-link"
                            activeClassName="active-menu"
                        >About Us</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
});

export default Sidebar;