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
import NewPropertyForm from "../components/properties/NewPropertyForm";
import MeetingNotes from "../components/meetings/MeetingNotes";
import EditPropertyForm from "../components/properties/EditPropertyForm";

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/404" component={PageNotFound} />
      <Route exact path="/properties" component={Properties} />
      <Route exact path="/property/:id" component={Property} />
      <Route exact path="/property" component={NewPropertyForm} />
      <Route exact path="/property/edit/:id" component={EditPropertyForm} />
      <Route exact path="/meeting_notes" component={MeetingNotes} />
      <Redirect to="/404" />
    </Switch>
  </Router>
);
