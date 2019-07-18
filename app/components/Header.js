import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'space-between'
  },
  toolbarLink: {
    // padding: theme.spacing(1),
    flexShrink: 0,
  }
})

const Header = () => {
  const classes = useStyles();
  return(
    <header>
      <Typography component="h1" variant="h2" align="center" gutterBottom>
        Alex Shopov
      </Typography>
      <Container maxWidth="xs">
        <Toolbar component="nav" className={classes.toolbar}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/links">Links</NavLink>
        </Toolbar>
      </Container>
    </header>
  );
};

export default Header;
