import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsList from "./Pages/NewsList/NewsList";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={NewsList} />
      </Switch>
    </Router>
  );
}

export default Routes;
