import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                if(auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if(auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }


    return (
        <div className='login'>
            <Link to="/" className='link'>
                <div className='logo'>amazonia</div>
            </Link>
            <div className='login__container'>
                <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className='login__signInButton'>Sign In</button>

                    <p>
                        By signing in you agree to amazonia's Clone Conditions of Use & Sale. 
                        Plese see our Privacy Notice, our Cookies Notice and our interest-based Ads
                    </p>

                    <button onClick={register} className='login__registerButton'>Create your <i>amazonia</i> Account</button>
                </form>
            </div>

        </div>
    )
}

export default Login