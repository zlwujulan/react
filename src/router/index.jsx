import React from 'react'
import {hashHistory} from 'react-router'
import index from '../pages/index'
const RouteConfig =(
    <Router path="/" history={hashHistory}>
          <div>
              <Route path="/" component={index}></Route>
          </div>
    </Router>
)
export default RouteConfig;
