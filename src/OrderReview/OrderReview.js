import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './OrderReview.css';

const OrderReview = ({selected,handleDelete}) => {
    const {name,img,price,quantity,shipping,id} = selected;
    return (
        <div className='selected-product'>
            
            <div>
                <img src={img} alt="" />
            </div>
            <div className='selected-product-details'>
                <div className='product-details'>
                    <h4>{name}</h4>
                    <p><small>Price : <span>${price}</span></small></p>
                    <p><small>Shipping Charge : <span>${shipping}</span></small></p>
                    <p><small>Quantity : {quantity}</small></p>

                </div>
                <div className='delete-container'>
                    <button onClick={() => handleDelete(id)}><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>

            </div>
            
        </div>
    );
};

export default OrderReview;