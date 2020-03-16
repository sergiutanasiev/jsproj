import React from 'react'
import './Login.css'
import { Link } from "react-router-dom"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    render () {
        return (
            <div className="auth">
                <h4>Log in</h4>
                <div className="auth-tab">
                    <Link to="/login">Log in</Link>
                    <Link to="/signup">Sign up</Link>
                </div>
                <form>
                    <label>
                        Email
                        <input type="email"/>
                    </label>
                    <label>
                        Password
                        <input type="password"/>
                    </label>
                    <button type="submit">Log In</button>
                </form>
            </div>
        )
    }
}

export default Login