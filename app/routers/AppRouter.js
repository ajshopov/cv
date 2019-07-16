import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Books from "../components/Books";
import CssBaseline from '@material-ui/core/CssBaseline';

const AppRouter = () => (
  <HashRouter>
    <CssBaseline />
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/books" component={Books} />
    </Switch>
  </HashRouter>
);

export default AppRouter;