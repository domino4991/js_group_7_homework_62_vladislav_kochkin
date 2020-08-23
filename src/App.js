import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <nav className="Nav">
                <ul className="Nav-list">
                    <li className="Nav-item">
                        <NavLink
                            to="/"
                            exact
                            activeClassName="active-menu"
                        >Home</NavLink>
                    </li>
                    <li className="Nav-item">
                        <NavLink
                            to="/products"
                            activeClassName="active-menu"
                        >Products</NavLink>
                    </li>
                    <li className="Nav-item">
                        <NavLink
                            to="/about"
                            activeClassName="active-menu"
                        >About Us</NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" exact>
                    <p>Home</p>
                </Route>
                <Route path="/products" >
                    <p>products</p>
                </Route>
                <Route path="/about">
                    <p>About</p>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
