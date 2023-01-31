import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Booklist from "../components/Booklist";
import NotFoundPage from "../components/NotFoundPage";
import Resources from "../components/Resources";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { createTheme, adaptV4Theme } from '@mui/material/styles';

const outerTheme = createTheme(adaptV4Theme({
  typography: {
    fontFamily: "'Crimson Text', serif",
    body1: {
      fontSize: '1.25rem'
    },
    h3: {
      lineHeight: '4rem'
    }
  },
  palette: {
    background: {
      default: '#FFF'
    },
    text: {
      primary: '#333'
    }
  }
}));

const AppRouter = () => (
  <HashRouter>
    <StyledEngineProvider injectFirst>
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
    </StyledEngineProvider>
  </HashRouter>
);

export default AppRouter;