import './App.css';
import React from "react";
import Footer from './components/Footer'
import MyRouter from './components/MyRouter'
import '../src/css/login-registration.css'
import '../src/css/landingpage.css'

export default function App() {
    return (
        <div className="App">
            <MyRouter/>
            <Footer/>
        </div>
    );
}