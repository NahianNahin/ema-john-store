import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UseContext';
import Google from '../../google.png'

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        console.log(email, password, confirmPassword);
        if (password.length < 9) {
            setError('Password should be 8 character or more');
            return;
        };
        if (password !== confirmPassword) {
            setError('Password not match!');
            return;
        };
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setSuccess(true);
            })
            .catch(error => {
                console.log(error);
                const message = error.message;
                setError(message);
            })

    }
    return (
        <div className='form-container'>
            <form className='form-box' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="email">Password</label>
                    <input type="password" name='password' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="email">Confirm Password</label>
                    <input type="password" name='confirm' required />
                </div>
                {
                    (success === true) ? <p><small className='success-text'>Successfully Sign Up!</small></p> :
                        <p><small className='error-text'>{error}</small></p>
                }
                <button className='form-btn'>Sign Up</button>
                <p className='text-style'>Already have an account?  <Link to='/login'>Login</Link></p>
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

export default Signup;