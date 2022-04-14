import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }


    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        // navigate('/shop')
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>This is login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <h6>loading....</h6>
                    }
                    <input className='form-submit' type="submit" value="Log in" />

                </form>

                <p>
                    new to Ema-John?? <Link className='form-link' to='/signup'>Create a account</Link>
                </p>
                <div className='dash'>
                    <p>---------------</p>
                    <p> or </p>
                    <p>---------------</p>
                </div>
                <div className='form-button'>
                    <button><img src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg" alt="" />Continue with google</button>
                </div>

            </div>
        </div>
    );
};

export default Login;