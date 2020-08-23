import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./containers/HomePage/HomePage";
import ProductsPage from "./containers/ProductsPage/ProductsPage";

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Sidebar />
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/tours" >
                    <ProductsPage />
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
