import ProductPage from "./ProductPage";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Registration";
import AboutUs from "./AboutUs";
import PrivacyAndPolicy from "./PrivacyAndPolicy";
import TearmsAndConditions from "./TearmsAndConditions";
import LandingPage from "./LandingPage";

function MyRouter() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <Navbar/>
                </header>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </Switch>
                <div className={"container"}>
                    <Switch>
                        <Route path="/home">
                            <div>Welcome!</div>
                        </Route>
                        <Route path="/products" component={ProductPage}/>
                        <Route path="/about" component={AboutUs}/>
                        <Route path="/privacy" component={PrivacyAndPolicy}/>
                        <Route path="/terms-and-conditions" component={TearmsAndConditions}/>
                        <Route path="/" component={LandingPage}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default MyRouter;