import React , {useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios"

const Edit = () => {

        // STATE
        const [title, setTitle] = useState()
        const [price, setPrice] = useState()
        const [description, setDescription] = useState()

    const {product_id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+product_id)
            .then(respose => {
                console.log(respose.data)
                const {title, price, description} = respose.data
                setTitle(title)
                setPrice(price)
                setDescription(description)
            })
            .catch(error => console.log(error))
    }, [])

    const updateProduct = (event) => {
        event.preventDefault()
        const productObj = {
            title,
            price,
            description
        }
        axios.put("http://localhost:8000/api/products/"+product_id, productObj)
            .then(respose => navigate("/"))
            .catch(error => console.log(error))
    }


    return (
        <fieldset>
            <legend>Edit.jsx</legend>
            <form onSubmit={updateProduct}>
                <h2>Product Manager</h2>
                <p>
                    Title:
                    <input onChange={(event) => setTitle(event.target.value)} value={title} type="text" name="title" id="" />
                </p>
                <p>
                    Price:
                    <input onChange={(event) => setPrice(event.target.value)} value={price} type="number" name="price" id="" />
                </p>
                <p>
                    Description:
                    <input onChange={(event) => setDescription(event.target.value)} value={description} type="text" name="description" id="" />
                </p>
                <button>Update</button>
            </form>
        </fieldset>
    )
}

export default Edit