import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";

const AppRouter = () => (
  <HashRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
    </Switch>
  </HashRouter>
);

export default AppRouter;