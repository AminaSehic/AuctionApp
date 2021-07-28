import React from "react"
import request from "./Auth";
import {Async, useAsync} from "react-async"
import Product from "./Product";

async function getProductsFromApi(props) {
    try {
        let categoryId = props.options;
        const response = await request('GET', `api/products/${categoryId}`);
        if (response.data) {
            return response.data;
        }
    } catch (err) {
        console.log(err.data);
        return null;
    }
}

function ProductBox(props) {
    return (
        <Async promiseFn={getProductsFromApi} options={props.categoryId}>
            <Async.Pending>Loading ...</Async.Pending>
            <Async.Rejected>{error => `Something went wrong: ${error.message}`}</Async.Rejected>
            <Async.Fulfilled>
                {data => {
                    return (<div>
                        {
                            data.map(p => <Product product={p}/>)
                        }
                    </div>)
                }
                }
            </Async.Fulfilled>
        </Async>
    )
}

export default ProductBox;