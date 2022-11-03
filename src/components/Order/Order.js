import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderReview from '../OrderReview/OrderReview';
import './Order.css';

const Order = () => {
    const {initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart)
    console.log(cart);
    const handleDelete = id => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }
    const handleClear = () => {
        setCart([]);
        deleteShoppingCart();


    };
    return (
        <div className='order'>
            <div className='select-product-container'>
                {
                    cart.map(selected => <OrderReview
                        key={selected.id}
                        selected={selected}
                        handleDelete={handleDelete}>
                    </OrderReview>)
                }
                {
                    cart.length === 0 && <h1>No Product in the Cart. Please Visit to <Link to="/">Shop</Link></h1>
                }

            </div>
            <div className='order-cart-container'>
                <p className='heading'>Order Summary</p>
                <Cart handleClear={handleClear} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;