import React from "react"
import request from "./Auth";
import {Async, useAsync} from "react-async"

async function getCategoriesFromApi() {
    try {
        const response = await request('GET', 'api/categories/');
        if (response.data) {
            return response.data
        }
    } catch (err) {
        console.log(err.data);
    }
}

function ProductCategoriesSideMenu() {
    return (
        <Async promiseFn={getCategoriesFromApi}>
            <Async.Pending>Loading ...</Async.Pending>
            <Async.Rejected>{error => `Something went wrong: ${error.message}`}</Async.Rejected>
            <Async.Fulfilled>
                {data => {
                    const children = data.filter(e => e.parent);
                    const parents = data.filter(e => !e.parent);
                    const parents_children = parents.map(p => {
                        return {...p, children: children.filter(c => c.parent.id === p.id)}
                    })
                    let result = parents_children.map(p => {
                        let kids = '';
                        if (p.children.length > 0) {
                            kids = <ul>
                                {p.children.map(c => {
                                    let link = "/products?category=" + c.id
                                    return <li className={"list-item"}><a className={"links subcategories"}
                                                                          href={link}>{c.name}</a></li>
                                })}
                            </ul>
                        }
                        let link = "/products?category=" + p.id
                        return <li className={"list-item"}><a className={"links categories"}
                                                              href={link}>{p.name}</a>{kids}</li>
                    })
                    return (
                        <ul>
                            {result}
                        </ul>
                    )
                }
                }
            </Async.Fulfilled>
        </Async>
    )
}

export default ProductCategoriesSideMenu