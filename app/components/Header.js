import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'space-between'
  },
  header: {
    margin: '32px auto'
  },
  hero: {
    backgroundColor: '#F7FAFB',
    fontFamily: "'Nunito', sans-serif",
    textTransform: "uppercase",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: '0 16px'
  },
  active: {
    fontWeight: 'bold'
  },
  icons: {
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold'
  }
})

const RouteLink = React.forwardRef((props, ref) => (
  <NavLink innerRef={ref} {...props} />
));


const Header = () => {
  const classes = useStyles();
  return(
    <Container maxWidth="lg" className={classes.header}>
      <Box className={classes.hero}>
        <Typography component="h1" variant="h5" align="center" className={classes.title}>
          Alex Shopov
        </Typography>
        <Container maxWidth="xs">
          <Toolbar component="nav" className={classes.toolbar}>
            <Link component={RouteLink} color="inherit" activeClassName={classes.active} exact to="/">Home</Link>
            <Link component={RouteLink} color="inherit" activeClassName={classes.active} to="/portfolio">Portfolio</Link>
            <Link component={RouteLink} color="inherit" activeClassName={classes.active} to="/resources">Resources</Link>
            <Link component={RouteLink} color="inherit" activeClassName={classes.active} to="/booklist">Booklist</Link>
          </Toolbar>
        </Container>
        <Box className={classes.icons}>
          <Link
            href="https://www.linkedin.com/in/alexshopov/"
            rel="noopener noreferrer"
            target="_blank"
            color="inherit"
          >
            <span style={{ fontSize: '1.5em' }}>
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </Link>
          <Link
            href="https://github.com/ajshopov"
            rel="noopener noreferrer"
            target="_blank"
            color="inherit"
          >
            <span style={{ fontSize: '1.5em', marginLeft: '0.5em'}}>
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
