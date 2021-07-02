import './App.css';
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import auction from './auction.png'
import pic1 from './picture1.jpg'
import pic2 from './picture2.jpg'
import pic3 from './picture3.png'
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faGoogle,
    faSearchengin,
} from "@fortawesome/free-brands-svg-icons";

import {
    BrowserRouter as Router,
    Switch,
    Route,
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
                <a className={"black-items"} href={"#"}>Login</a>
            </li>
            <p className={"black-items-or"}>or </p>
            <li className={"black-items"}>
                <a className={"black-items"} href={"#"}>Create an Account</a>
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
            <div className={"auction_div"}>
                <img className={"auction-picture"} src={auction}/>
                <p>AUCTION</p>
            </div>
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
                    <Link to="/terms_and_conditions" className={"white-items"}>TERMS AND CONDITIONS</Link>
                    {/*<a className={"white-items "} href={"#"}>MY ACCOUNT</a>*/}
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

function Footer() {
    return (
        <footer className={"footer"}>
            <ul>
                <li className={"footer-first-item"}>
                    <h1 className={"footer-first-headline"}>AUCTION</h1>
                    <div className={"footer-first-items"}>
                        <a className={"auction-first-item"} href="#">About Us</a>
                        <a className={"auction-first-item"} href="#">Tearms and Conditions</a>
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

function AboutUsNavbar() {
    return (
        <div className={"gray-navbar"}>
            <p className={"left-item"}>ABOUT US </p>
            <div className={"right-item"}>
                <p>SHOP/</p>
                <p>ABOUT US</p>
            </div>
        </div>
    );
}

function AboutUsComponent() {
    return (
        <div className={"main"}>
            <AboutUsNavbar/>
            <div></div>
            <div className={"page"}>
                <div className={"grid-title"}>
                    <h1 className={"title"}>About Us</h1>
                    <div className={"text"}>
                        <p>
                            An About Us page helps your company make a good first impression, and is critical
                            for building customer trust and loyalty. An About Us page should make sure to cover
                            basic information about the store and its founders, explain the company's purpose and how it
                            differs from the competition, and encourage discussion and interaction. Here are some free
                            templates, samples,
                            and example About Us pages to help your ecommerce store stand out from the crowd.
                            When it comes to personalizing your online store, nothing is more effective than
                            an About Us page. This is a quick summary of your company's history and purpose,
                            and should provide a clear overview of the company's brand story.
                            A great About Us page can help tell your brand story, establish customer loyalty,
                            and turn your bland ecommerce store into an well-loved brand icon.
                            <br/>
                            <br/>
                            Most importantly, it will give your customers a reason to shop from your brand.
                            In this post, we'll give you three different ways to create a professional about
                            us page for your online store, blog, or other website - use our about us page generator,
                            use the fill-in-the-blank about us template below,
                            or create your own custom page using the about us examples within this article.
                            So let's get started! Since we know you're busy and probably just looking
                            for something to copy/paste, we'll jump right into the About Us Page template.
                            Just fill in the blanks and you'll have a professional-looking page in minutes.
                            After that, we encourage you to read the rest of the article.
                            It explains why About Us pages are extra important for ecommerce sites,
                            gives you some tips on how to build the perfect
                            About Us page that your customers will love,
                            and shows some great example About Us pages to help inspire you.
                        </p>
                    </div>
                </div>
                <div className={"pictures-right"}>
                    <div></div>
                    <div className={"grid-first-row"}>
                        <img className={"pic"} src={pic1}/>
                    </div>
                    <div className={"grid-second-row"}>
                        <img className={"pic pic-bottom"} src={pic3}/>
                        <img className={"pic pic-bottom"} src={pic2}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AboutUs() {
    return (
        <div className={"about-us-final-page"}>
            <AboutUsComponent/>
        </div>
    )
}

function PrivacyAndPolicyNavbar() {
    return (
        <div className={"gray-navbar"}>
            <p className={"left-item"}>PRIVACY AND POLICY </p>
            <div className={"right-item"}>
                <p>SHOP/</p>
                <p>PRIVACY AND POLICY</p>
            </div>
        </div>
    )
}

function PrivacyAndPolicyComponent() {
    return (
        <div className={"main"}>
            <PrivacyAndPolicyNavbar/>
            <div></div>
            <div className={"page-privacy"}>
                <h1 className={"title-privacy"}>Some title here</h1>
                <div className={"text-privacy"}>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                        <br/>
                        <br/>
                        Why do we use it?
                        It is a long established fact that a reader will be distracted by the readable content of a
                        page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English.
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                        text,
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                        versions have
                        evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the
                        like).
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin
                        literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                        Hampden-Sydney College in Virginia
                        , looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                        literature, discovered the undoubtable source.


                    </p>
                </div>
            </div>
        </div>
    )
}

function PrivacyAndPolicy() {
    return (
        <div className={"privacy-and-policy-final-page"}>
            <PrivacyAndPolicyComponent/>
        </div>
    )
}

function TearmsAndConditionsNavbar() {
    return (
        <div className={"gray-navbar"}>
            <p className={"left-item"}>TEARMS AND CONDITIONS </p>
            <div className={"right-item"}>
                <p>SHOP/</p>
                <p>TEARMS AND CONDITIONS</p>
            </div>
        </div>
    )
}

function TearmsAndConditionsComponent() {
    return (
        <div className={"main"}>
            <TearmsAndConditionsNavbar/>
            <div></div>
            <div className={"page-privacy"}>
                <h1 className={"title-privacy"}>Introduction</h1>
                <div className={"text-privacy"}>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                        <br/>
                    </p>
                    <h3>Some title here</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                    <h3>Some title here</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    )
}

function TearmsAndConditions() {
    return (
        <div>
            <TearmsAndConditionsComponent/>
        </div>
    )
}

//
// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <Navbar/>
//             </header>
//             <div className={"container"}>
//                 <TearmsAndConditions/>
//             </div>
//
//             <Footer/>
//         </div>
//     );
// }

export default function App() {
    return (

        <div className="App">
            <Router>
                <header className="App-header">
                    <Navbar/>
                </header>
                <div className={"container"}>
                    <Switch>
                        <Route path="/about">
                            <AboutUs/>
                        </Route>
                        <Route path="/privacy">
                            <PrivacyAndPolicy/>
                        </Route>
                        <Route path="/terms_and_conditions">
                            <TearmsAndConditions/>
                        </Route>
                    </Switch>
                </div>
            </Router>
            <Footer/>
        </div>

    );
}

