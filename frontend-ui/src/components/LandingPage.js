import React, {useEffect, useState} from "react";
import ProductContent from "./ProductContent";
import ProductCategoriesSideMenu from "./CategoriesSidemenu";

function LandingNavbar() {
    return (
        <div >
            <div className={"landing-grid"}>

                <div className={"left-menu product-navbar"} id={"product-categories"}>
                    <ProductCategoriesSideMenu/>
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
                    <ProductContent/>
                </div>
                <div className="last-chance-content">
                    <ProductContent/>
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