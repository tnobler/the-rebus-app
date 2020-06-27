import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import PageNotFound from "../pages/404";
import Properties from "../components/properties/Properties";
import Property from "../components/properties/Property";
import PropertyForm from "../components/properties/PropertyForm";
import MeetingNotes from "../components/meetings/MeetingNotes";

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/404" component={PageNotFound} />
      <Route exact path="/properties" component={Properties} />
      <Route exact path="/property/:id" component={Property} />
      <Route exact path="/property" component={PropertyForm} />
      <Route exact path="/meeting_notes" component={MeetingNotes} />
      <Redirect to="/404" />
    </Switch>
  </Router>
);
