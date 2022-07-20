import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"


const Detail = () => {
    // STATE 
    const [product, setProduct] = useState()


    // PARAMS
    const { product_id } =  useParams()
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+product_id)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))
    }, [])




    return (
        <fieldset>
            <legend>Detail.jsx</legend>
            {
                (product) ?
                <>
                    <h1>{product.title}</h1>
                    <h1>{product.price}</h1>
                    <h1>{product.description}</h1>
                </> : <h1>Loading...</h1>
            }
        </fieldset>
    )
}

export default Detail