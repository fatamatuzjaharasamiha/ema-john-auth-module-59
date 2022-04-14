import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [error, setError] = useState('')

    const Navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPass(event.target.value)
    }

    if (user) {
        Navigate('/shop')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPass) {
            setError('Your two password is not match')
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 character or longer')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign up" />
                </form>
                <p>
                    Already have an account? <Link className='form-link' to='/login'>Log in</Link>
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

export default SignUp;