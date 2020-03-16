import React from 'react'
import './Login.css'
import { Link } from "react-router-dom"

class Signup extends React.Component {
    render() {
        return (
            <div className="auth">
                <h4>Sign up</h4>
                <div className="auth-tab">
                    <Link to="/login">Log in</Link>
                    <Link to="/signup">Sign up</Link>
                </div>
                <form>
                    <label>
                        Email
                        <input type="email" name="email" required/>
                    </label>
                    <label>
                        Password
                        <input type="password" name="password" required/>
                    </label>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        )
    }
}

export default Signup