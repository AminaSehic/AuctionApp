import './App.css';
import React from "react";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import PrivacyAndPolicy from "./components/PrivacyAndPolicy";
import TearmsAndConditions from "./components/TearmsAndConditions";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App(){
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <Navbar/>
                </header>
                <div className={"container"}>
                    <Switch>
                        <Route path="/about">
                            <AboutUs/>¸
                        </Route>
                        <Route path="/privacy">
                            <PrivacyAndPolicy/>
                        </Route>
                        <Route path="/terms-and-conditions">
                            <TearmsAndConditions/>
                        </Route>
                    </Switch>
                </div>
            </Router>
            <Footer/>
        </div>
    );
}