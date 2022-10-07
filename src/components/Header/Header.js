import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <img src= {logo} alt="" />
                <div className='nav-link'>
                    <Link to="/">Shop</Link>
                    <Link to="/order">Order</Link>
                    <Link to="/manage-inventory">Manage Inventory</Link>
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;