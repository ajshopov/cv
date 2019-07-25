import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Booklist from "../components/Booklist";
import NotFoundPage from "../components/NotFoundPage";
import Resources from "../components/Resources";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const outerTheme = createMuiTheme({
  typography: {
    fontFamily: "'Crimson Text', serif",
    body1: {
      fontSize: '1.25rem'
    }
  },
  palette: {
    background: {
      default: '#FFF'
    }
  }
});

const AppRouter = () => (
  <HashRouter>
    <ThemeProvider theme={outerTheme}>
      <CssBaseline />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resources" component={Resources} />
          <Route path="/booklist" component={Booklist} />
          <Route component={NotFoundPage} />
        </Switch>
    </ThemeProvider>
  </HashRouter>
);

export default AppRouter;