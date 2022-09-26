import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let totalPrice = 0;
    let shipping = 0;
    for( const product of cart){
        totalPrice = totalPrice + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((totalPrice* 0.1).toFixed(2));
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price : ${totalPrice} </p>
            <p>Shipping : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h3>Grand Total : ${grandTotal}</h3>
        </div>
    );
};

export default Cart;