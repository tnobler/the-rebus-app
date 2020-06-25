import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Routes from "../routes/Index"

export default props => <>{Routes}</>
// Pages
import Dashboard from "../pages/Dashboard"
import PageNotFound from "../pages/404";

class RebusApp extends React.Component {
  constructor(props) {
    super(props)
    
    }  
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/404" component={PageNotFound} />
          {/* <Route exact path='/new_property' component={} /> */}
          <Redirect to="/404" />
        </Switch>
      </Router>
    )
  }
      
}

document.addEventListener("turbolinks:load", () => {
  const app = document.getElementById("rebus-app");
  app && ReactDOM.render(<RebusApp />, app);
});
