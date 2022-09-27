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
    
    const handleAddToCart = (selectProduct) => {
        // console.log(product);
        const exists = cart.find(product => product.id === selectProduct.id);
        let newCart = [];
        if(!exists){
            selectProduct.quantity = 1;
            newCart = [...cart,selectProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest,exists];

            
        }
        
        setCart(newCart);
        addToDb(selectProduct.id); 
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