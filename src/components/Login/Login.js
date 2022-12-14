import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import Google from '../../google.png'
import { AuthContext } from '../../contexts/UseContext';




const Login = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const { loginUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 9) {
            setError('Password should be 8 character or more');
            return;
        };
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setSuccess(true);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                const message = error.message;
                setError(message);
            });

    }
    return (
        <div className='form-container'>
            <form className='form-box' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="email">Password</label>
                    <input type="Password" name='password' required />
                </div>
                {
                    (success === true) ? <p><small className='success-text'>Successfully Login!</small></p> :
                        <p><small className='error-text'>{error}</small></p>
                }
                <button className='form-btn'>Login</button>
                <p className='text-style'>New to Ema-john? <Link to='/signup'>Create New Account</Link></p>
                <div className='divider'>
                    <hr />
                    <span>or</span>
                    <hr />
                </div>
                <button className='google-form-btn'><img src={Google} alt="" /> <p>Continue with Google</p></button>
            </form>
        </div>
    );
};

export default Login;