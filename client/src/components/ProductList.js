import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const ProductList = (props) => {
    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                console.log(res)
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h2>All products: </h2>
            <div>
                {props.products.map( (product, i) =>
                    <div>
                        <Link to={"/products/" + product._id}>
                            <p key={i}>{product.title}</p>
                        </Link>
                        <button onClick={(e)=>{ deleteProduct(product._id) }}>
                            Delete
                        </button>
                    </div>
                )}
            </div>
            <hr/>
        </div>
    )
}
    
export default ProductList;