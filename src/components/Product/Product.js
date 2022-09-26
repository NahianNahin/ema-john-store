import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {handleAddToCart,product} = props;
    const {name,seller,ratings,price,img} = product;
    
    return (
        <div className='product'>
            <img src= {img} alt="Shoes" />
            <div className='product-info'>
                <h2>{name}</h2>
                <h3>Price : $ {price}</h3>
                <p><small>Seller : {seller}</small></p>
                <p><small>Ratings : {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)}><p>Add to Cart</p>
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;