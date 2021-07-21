import './App.css';
import React from "react";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import PrivacyAndPolicy from "./components/PrivacyAndPolicy";
import TearmsAndConditions from "./components/TearmsAndConditions";
import Login from "./components/Login"
import Register from "./components/Registration";
import '../src/css/login-registration.css'
import LandingPage from "./components/LandingPage"
import '../src/css/landingpage.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <Navbar/>
                </header>
                    <Switch>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/register">
                            <Register/>
                        </Route>
                    </Switch>
                <div className={"container"}>
                    <Switch>
                        <Route path="/about">
                            <AboutUs/>
                        </Route>
                        <Route path="/privacy">
                            <PrivacyAndPolicy/>
                        </Route>
                        <Route path="/terms-and-conditions">
                            <TearmsAndConditions/>
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/home">
                            <LandingPage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
            <Footer/>
        </div>
    );
}