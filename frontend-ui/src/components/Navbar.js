import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
    faFacebook,
    faInstagram,
    faTwitter,
    faGoogle,
    faSearchengin,
} from "@fortawesome/free-brands-svg-icons";

import {
    Link
} from "react-router-dom";

function SocialFollow() {
    return (
        <ul className={"navbar-list"}>
            <li>
                <a
                    href="https://www.facebook.com"
                    className="social-media"
                >
                    <FontAwesomeIcon icon={faFacebook} size="1x"/>
                </a>
            </li>
            <li>
                <a
                    href="https://www.instagram.com"
                    className="social-media"
                >
                    <FontAwesomeIcon icon={faInstagram} size="1x"/>
                </a>
            </li>
            <li>
                <a
                    href="https://www.twitter.com"
                    className="social-media"
                >
                    <FontAwesomeIcon icon={faTwitter} size="1x"/>
                </a>
            </li>
            <li>
                <a
                    href="https://www.google.com"
                    className="social-media"
                >
                    <FontAwesomeIcon icon={faGoogle} size="1x"/>
                </a>
            </li>
        </ul>
    )
}

function LogInComponent() {
    return (
        <ul className={"navbar-list text-align-right "}>
            <li className={"black-items"}>
                <Link to="/login" className={"black-items"}>Login</Link>
            </li>
            <p className={"black-items-or"}>or </p>
            <li className={"black-items"}>
                <Link to="/register" className={"black-items"}>Create an Account</Link>
            </li>
        </ul>
    );
}

function Search() {
    return (
        <form action="/" method="get" className={"search-form"}>
            <input className={"search-input"}
                   type="text"
                   id="header-search"
                   name="s"
            />
            <button type="submit" className={"search-button"}>
                <FontAwesomeIcon icon={faSearchengin} size="1x"/>
            </button>
        </form>
    )
}

function BlackNavbar() {
    return (
        <nav className={"black-navbar"}>
            <div className={"black-navbar-social-media"}>
                <SocialFollow/>
            </div>
            <div className={"login"}>
                <LogInComponent/>
            </div>
        </nav>
    );
}

function WhiteNavbar() {
    return (
        <nav className={"white-navbar"}>
            <a className={"auction_div"} href={"/"}>
                <img className={"auction-picture"} src={"/images/auction.png"} alt=""/>
                <p>AUCTION</p>
            </a>
            <Search/>
            <ul className={"white-items"}>
                <li>
                    <Link to="/about" className={"white-items"}>ABOUT</Link>
                    {/*<a className={"white-items "} href={"#"}>HOME </a>*/}
                </li>
                <li>
                    <Link to="/privacy" className={"white-items"}>PRIVACY AND POLICY</Link>
                    {/*<a className={"white-items "} href={"#"}>SHOP </a>*/}
                </li>
                <li>
                    <Link to="/terms-and-conditions" className={"white-items"}>TERMS AND CONDITIONS</Link>
                    {/*<a className={"white-items "} href={"#"}>MY ACCOUNT</a>*/}
                </li>
            </ul>
        </nav>
    )
}

function WhiteNavbarRegistered() {
    return (
        <nav className={"white-navbar"}>
            <div className={"auction_div"}>
                <img className={"auction-picture"} src={"/images/auction.png"} alt=""/>
                <p>AUCTION</p>
            </div>
            <Search/>
            <ul className={"white-items"}>
                <li>
                    <a className={"white-items "} href={"#"}>HOME </a>
                </li>
                <li>
                    <a className={"white-items "} href={"#"}>SHOP </a>
                </li>
                <li>
                    <a className={"white-items "} href={"#"}>MY ACCOUNT</a>
                </li>
            </ul>
        </nav>
    )
}

function Navbar() {
    return (
        <div>
            <BlackNavbar/>
            <WhiteNavbar/>
        </div>
    );
}

export default Navbar;