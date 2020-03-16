import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom"

import Main from './views/Main/Main'
import Login from './views/Auth/Login'
import Signup from './views/Auth/Signup'
import Game from './views/Game/Game'
import NotFound from './views/404/404'

export default function Routes () {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/game" component={Game} />
            <Route component={NotFound} />
        </Switch>
    )
}