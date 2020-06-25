import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Dashboard from "../pages/Dashboard"
import PageNotFound from "../pages/404";


export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/404" component={PageNotFound} />
      <Redirect to="/404" />
    </Switch>
  </Router>
)