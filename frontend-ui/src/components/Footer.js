import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faGoogle,
    faSearchengin,
} from "@fortawesome/free-brands-svg-icons";

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
function Footer() {
    return (
        <footer className={"footer"}>
            <ul>
                <li className={"footer-first-item"}>
                    <h1 className={"footer-first-headline"}>AUCTION</h1>
                    <div className={"footer-first-items"}>
                        <a className={"auction-first-item"} href="#">About Us</a>
                        <a className={"auction-first-item"} href="#">Terms and Conditions</a>
                        <a className={"auction-first-item"} href="#">Privacy and Policy</a>
                    </div>
                </li>
                <li className={"footer-second-item"}>
                    <h1 className={"footer-second-headline"}>GET IN TOUCH</h1>
                    <div className={"footer-second-items"}>
                        <a className={"footer-second-item"} href="#">Call us at +123 797-567-2535</a>
                        <a className={"footer-second-item"} href="#">support@auction.com</a>
                        <div className={"footer-social-follow"}><SocialFollow/></div>
                    </div>
                </li>
            </ul>
        </footer>
    )
}
export default Footer;