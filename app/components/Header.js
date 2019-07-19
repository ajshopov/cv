import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'space-between'
  },
  header: {
    marginBottom: '32px'
  },
  hero: {
    padding: '32px 0'
  }
})

const RouteLink = React.forwardRef((props, ref) => (
  <NavLink innerRef={ref} {...props} />
));


const Header = () => {
  const classes = useStyles();
  return(
    <header className={classes.header}>
      <div className={classes.hero}>
        <Typography component="h1" variant="h2" align="center">
          Alex Shopov
        </Typography>
        <Typography variant="h4" align="center">
          Web Developer
        </Typography>
      </div>
      <Divider/>
      <Container maxWidth="xs">
        <Toolbar component="nav" variant="dense" className={classes.toolbar}>
          <Link component={RouteLink} color="inherit" to="/">Home</Link>
          <Link component={RouteLink} color="inherit" to="/portfolio">Portfolio</Link>
          <Link component={RouteLink} color="inherit" to="/resources">Resources</Link>
          <Link component={RouteLink} color="inherit" to="/booklist">Booklist</Link>
        </Toolbar>
      </Container>
      <Divider/>
    </header>
  );
};

export default Header;
