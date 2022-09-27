import React, { useEffect, useState } from 'react';
import { addToDb, getTheCartFromDB } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    
    useEffect(() => {
        const storedCart = getTheCartFromDB();
        const saveCart = [];
        console.log(storedCart);
        for(const id in storedCart){
            const addCart = products.find(product => product.id === id);
            if(addCart){
                const quantity = storedCart[id];
                addCart.quantity = quantity;
                saveCart.push(addCart);
            }
        }
        setCart(saveCart);
    },[products])
    
    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id); 
    }
    
    
    return (
        <div className='shop'>
            <div className='product-container'>
            {
                products.map(product => <Product 
                    key={product.id} 
                    product = {product} 
                    handleAddToCart = {handleAddToCart}></Product>)
            }
            </div>
            <div className='order-summary'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;