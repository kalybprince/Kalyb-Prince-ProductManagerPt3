import React, { useEffect, useState } from 'react'
import axios from 'axios';
// useParams for getting ID from URL
import { useParams } from "react-router-dom";

// Export to App.js
const Update = (props) => {
    // Create states for API response
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    
    // useEffect to run API when the page first loads
    useEffect(() => {
        // Make GET request with ID
        axios.get('http://localhost:8000/api/products/' + id)
            // then --> after successful response
            .then(res => {
                // set states for API responses
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);
    
    // Create put method for handling update
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            // log the results
            .then(res => console.log(res))
            .then()
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={ updateProduct }>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={ title } 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                    name="price" 
                    value={ price } 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={ description } 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;
