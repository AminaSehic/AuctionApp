import React, {useEffect, useState} from "react";
import '../css/product-page.css'
import ProductCategoriesSideMenu from "./CategoriesSidemenu"
import ProductBox from "./ProductBox";

function ProductCategories() {
    return (
        <div id={"product-categories"} className={"left-menu"}>
            <div className={"product-navbar"}>
                <p className={"headline"}>PRODUCT CATEGORIES</p>
                <div className={"left-menu product-navbar"} id={"product-categories"}>
                    <ProductCategoriesSideMenu/>
                </div>
            </div>
        </div>
    )
}

function ProductCollection(props) {
    return (
        <div className={"product-collection"}>
            {/*<ProductContent/>*/}
            <ProductBox categoryId={props.categoryId}/>
            <div>
                <button className={"explore-me-button"}>EXPLORE ME</button>
            </div>
        </div>
    )
}

function ProductPage(props) {
    return (
        <div className={"product-page"}>
            <div className={"product-categories"}><ProductCategories/></div>
            <ProductCollection categoryId={props.location.search}/>
        </div>
    )
}

export default ProductPage;