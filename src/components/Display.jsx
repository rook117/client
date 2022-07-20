import React from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

const Display = (props) => {

    const { refresh } = props

    const { products } = props

    const deleteProduct = (product_id) => {
        console.log(product_id)
        axios.delete("http://localhost:8000/api/products/"+product_id)
            .then(response => refresh())
            .catch(error => console.log(error))
    }


    return (
        <fieldset>
            <legend>Display.jsx</legend>
            <h2>All Products</h2>
            <table>
                <tbody>
                    {
                        products.map((product) => {
                            return(
                                <tr>
                                <td>
                                    <Link to={"/"+product._id}>{product.title}</Link>
                                </td>
                                <td>
                                <Link to={"/"+product._id+"/edit"}>Edit</Link>
                                </td>
                                <button onClick={() => deleteProduct(product._id)}>DELETE</button>
                                </tr>
                            )
                        })
                    }
                </tbody>
                
            </table>
        </fieldset>
    )
}

export default Display