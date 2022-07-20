import React, { useState } from 'react'
import axios from 'axios'

const Form = (props) => {
    
    const {refresh} = props
    // STATE
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()

    const createProduct = (event) => {
        event.preventDefault();
        const productObj = {
            title,
            price,
            description
        }


        axios.post("http://localhost:8000/api/products", productObj)
            .then(newProduct => {
                console.log(newProduct)
            refresh()
            })
            .catch(error => console.log(error))
    }


    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={createProduct}>
                <h2>Product Manager</h2>
                <p>
                    Title:
                    <input onChange={(event) => setTitle(event.target.value)} type="text" name="title" id="" />
                </p>
                <p>
                    Price:
                    <input onChange={(event) => setPrice(event.target.value)} type="number" name="price" id="" />
                </p>
                <p>
                    Description:
                    <input onChange={(event) => setDescription(event.target.value)} type="text" name="description" id="" />
                </p>
                <button>Create</button>
            </form>
        </fieldset>
    )
}

export default Form