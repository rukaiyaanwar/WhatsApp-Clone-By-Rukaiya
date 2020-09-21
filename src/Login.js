import React from 'react';
import { Button } from "@material-ui/core";
import './Login.css';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider'; 

function Login() {
    const [{ user }, dispatch] = useStateValue();
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className='login'>
            <div className="login__container">
                <img src='https://seeklogo.net/wp-content/uploads/2013/04/whatsapp-vector-logo-400x400.png' alt='' 
                />
                <div className='login__text'>
                    <h1>Sign In to WhatsApp</h1>
                    <h6>Brought you by Rukaiya Anwar</h6>
                </div>
                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
