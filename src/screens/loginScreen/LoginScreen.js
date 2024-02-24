import React from 'react';
import './_loginscreen.scss'
import { useDispatch } from 'react-redux';
import {login} from '../../redux/actions/auth.action'

function LoginScreen() {
    const dispatch = useDispatch()
    const handleLogin = () => {
        dispatch(login())
    }
    return (
        <div className="login">
            <div className="login-container">
                <img
                    src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
                    alt="" />
                <button onClick={handleLogin}>Login with Google</button>
                <p>This Project is made using Youtube Data API</p>
            </div>
        </div>
    )
}

export default LoginScreen