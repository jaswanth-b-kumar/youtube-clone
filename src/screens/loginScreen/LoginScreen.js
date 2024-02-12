import React from 'react';
import './_loginscreen.scss'

function LoginScreen() {
    return (
        <div className="login">
            <div className="login-container">
                <img
                    src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
                    alt="" />
                <button>Login with Google</button>
                <p>This Project is made using Youtube Data API</p>
            </div>
        </div>
    )
}

export default LoginScreen