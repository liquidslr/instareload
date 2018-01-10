import React, { Component } from 'react'

class Register extends Component {
    render() {
        return (
            <div>
                <div className="sign-wrap clearfix" id="signup">
                    <div className="sign">
                        <img src="/img/logo.png" alt="" />
                        <span>Sign up to see photos and videos from your friends.</span>
                        <a href="">
                            <img src="/img/logi.png" id="fb" alt="" />
                        </a>
                        <div className="or">
                            <span className="line"></span>
                            <span>or</span>
                            <span className="line"></span>
                        </div>
                        <form action="">
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Full Name" />
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <button type="submit" name="Sign" id="sign">Sign up</button>
                            <span style={{ fontWeight: '400', fontSize: '16px' }} >By signing up, you agree to our Terms & Privacy Policy.</span>
                        </form>
                    </div>
                    <div className="logged">
                        <span>Have an account? </span>
                        <a href="/login"> Log in</a>
                    </div>
                </div>
            </div >
        )
    }
}

export default Register;