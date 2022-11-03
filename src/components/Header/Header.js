import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UseContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div>
            <nav>
                <div className='logo-user-info'>
                    <img src={logo} alt="" />
                    {
                        user?.email && <span>Welcome! {user.email}</span>
                    }
                </div>
                <div className='nav-link'>
                    <Link to="/">Shop</Link>
                    <Link to="/order">Order</Link>
                    <Link to="/manage-inventory">Manage Inventory</Link>
                    {
                        user?.uid ? <button className='signout-btn' onClick={logOut}>Sign Out</button> :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/signup">Sign Up</Link>
                            </>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;