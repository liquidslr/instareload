import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="sign-wrap" id="login">
                    <div className="sign">
                        <img src="/img/logo.png" alt="" />
                        <form action="">
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button type="submit" name="Sign" id="sign">Log in</button>
                        </form>
                    </div>
                    <div className="logged">
                        <span>Dont't have an account? </span>
                        <Link to="/"> Sign up</Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default Login;