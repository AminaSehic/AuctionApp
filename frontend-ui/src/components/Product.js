import React from "react";

function Product(props) {
    const product = props.product;
    return (
        <div className={"landing-container"}>
            <div className="product-item">
                <div className="product-item-pic">
                    <img className="product-item-pic" src={"images/shoes/1.png"}/>
                </div>
                <div className="product-item-text">
                    <h6 className={"product-header"}><a href="#">{product.name}</a></h6>
                    <div className="product-item-price">{product.price || 'Start from $1000'}</div>
                </div>
            </div>
        </div>
    )
}

export default Product