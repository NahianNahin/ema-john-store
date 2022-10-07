import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';


const Cart = ({cart,handleClear}) => {
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    for( const product of cart){
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((totalPrice* 0.1).toFixed(2));
    const grandTotal = totalPrice + shipping + tax;

  
    return (
        <div className='cart'>
            
            <p>Selected Items : {quantity}</p>
            <p>Total Price : ${totalPrice} </p>
            <p>Shipping : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h3>Grand Total : ${grandTotal}</h3>
            <button onClick={handleClear}>
                <div>
                    <span>Clear Cart</span>
                </div>
                <div>
                    <FontAwesomeIcon className='btn-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </div>
            </button>
        </div>
    );
};

export default Cart;