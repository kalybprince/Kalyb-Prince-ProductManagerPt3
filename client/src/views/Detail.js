import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useHistory } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    var history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                console.log(res)
                history.push("/products/")
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <div>
                <Link to={"/products/" + product._id + "/edit"}>
                    Edit
                </Link>
                <button className="btn btn-primary ms-2" onClick={(e)=>{ deleteProduct(id) }}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Detail;