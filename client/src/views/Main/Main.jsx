import React from 'react'
import {
    Link
} from "react-router-dom"
import './Main.css'

class Main extends React.Component {
    render () {
        return (
            <div className="main">
                <header>
                    <Link to="/">Main</Link>
                    <Link to="/login">Login</Link>
                </header>
                <main></main>
                <footer></footer>
            </div>
        )
    }
}

export default Main