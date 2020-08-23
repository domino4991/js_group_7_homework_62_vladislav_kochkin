import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Sidebar />
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
