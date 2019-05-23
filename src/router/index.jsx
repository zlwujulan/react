import React from 'react'
import { Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import App from '../pages/index'

const history = createHistory()
const RouteConfig =(
    <Router  history={history}>
            <Route path="/" component={App}>
                  
            </Route>
    </Router>
)
export default RouteConfig;