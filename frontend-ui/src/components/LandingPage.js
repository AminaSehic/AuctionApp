import React, {useEffect, useState} from "react";

function LandingNavbar() {
    return (
        <div className={"landing-main"}>
            <div className={"landing-grid"}>
                <div className={"left-menu"}>
                    <a href="#" className="active links-left-menu ">CATEGORIES</a>
                    <a href="#" className="links-left-menu">Fashion</a>
                    <a href="#" className="links-left-menu">Accessories</a>
                    <a href="#" className="links-left-menu">Jewelery</a>
                    <a href="#" className="links-left-menu">Shoes</a>
                    <a href="#" className="links-left-menu">Sportswear</a>
                    <a href="#" className="links-left-menu">Home</a>
                    <a href="#" className="links-left-menu">Electronics</a>
                    <a href="#" className="links-left-menu">Mobile</a>
                    <a href="#" className="links-left-menu">Computer</a>
                    <a href="#" className="links-left-menu">All Categorise</a>
                </div>
                <div className={"highlighted-products"}>
                    <div className={"landing-page-text"}>
                        <p className={"landing-title"}>Running Shoes </p>
                        <p className={"landing-subtitle"}> Star from - $240.00</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut cosequat nulla. Duis nec
                            fermentum erat, et varius augue. Vivamus sed tempor libero.</p>
                        <button className={"landing-bid-now"}>Bid now ></button>
                    </div>
                    <div>
                        <img className="highlighted-product" src={"images/shoes-picture.png"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Item() {
    return (
        <div className="landing-container">
            <div className="product-item">
                <div className="product-item-pic">
                    <img className="product-item-pic" src={"images/template-gray-pic.jpg"}/>
                </div>
                <div className="product-item-text">
                    <h6><a href="#">Shoes Collection</a></h6>
                    <div className="product-item-price">Start from $59.00</div>
                </div>
            </div>
        </div>
    )
}
function Row() {
    return (
        <div className="row">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    )
}
function newArrivalsVisible() {
    let a = document.getElementsByClassName("new-arrivals-content")[0];
    let b = document.getElementsByClassName("last-chance-content")[0];
    a.style.display = 'block';
    b.style.display = 'none';
}

function lastChanceVisible() {
    let a = document.getElementsByClassName("new-arrivals-content")[0];
    let b = document.getElementsByClassName("last-chance-content")[0];
    a.style.display = 'none';
    b.style.display = 'block';
}

function LandingComponent() {
    return (
        <div className="tabs">
            <div className="button-group">
                <button onClick={newArrivalsVisible} id="tab-1" name="tab-group-1">
                    New Arrivals
                </button>
                <button onClick={lastChanceVisible} id="tab-2" name="tab-group-1">
                    Last Chance
                </button>
            </div>
            <div className="content-group">
                <div className="new-arrivals-content">
                    <Row/>
                    <br/>
                    <Row/>
                </div>
                <div className="last-chance-content">
                    {/*Content for last chance*/}
                    <Row/>
                    <br/>
                </div>
            </div>
        </div>
    )
}

function LandingPage() {
    return (
        <div>
            <LandingNavbar/>
            <LandingComponent/>
        </div>
    )
}

export default LandingPage;