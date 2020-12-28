import React from 'react'
import { Switch, Route } from "react-router-dom";
import Details from './Layout/Details'
import Main from './Layout/Main';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/details/:data/:id'>
                <Details />
            </Route>
            <Route path='/q=:movieName'>
                <Main />
            </Route>
            <Route exact path='/'>
                <Main />
            </Route>
        </Switch >

    )
}

export default Router
