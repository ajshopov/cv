import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Booklist from "../components/Booklist";
import NotFoundPage from "../components/NotFoundPage";
import Resources from "../components/Resources";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from "@material-ui/core/Container";

const AppRouter = () => (
  <HashRouter>
    <CssBaseline />
    <Container maxWidth="lg">
    <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resources" component={Resources} />
        <Route path="/booklist" component={Booklist} />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  </HashRouter>
);

export default AppRouter;