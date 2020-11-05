import React from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "./About";
import { Features } from "./Features";
import { Home } from "./Home";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/features">
        <Features />
      </Route>
    </Switch>
  );
};
