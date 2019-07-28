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
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 499px)': {
      padding: '0'
    }
  },
  header: {
    margin: '32px auto 64px',
    '@media (max-width: 819px)': {
      padding: '0'
    },
    '@media (max-width: 749px)': {
      margin: '64px auto 32px'
    }
  },
  nav: {
    backgroundColor: '#F7FAFB',
    fontFamily: "'Nunito', sans-serif",
    textTransform: "uppercase",
    display: 'flex',
    alignItems: 'baseline',
    padding: '0 32px',
    '@media (max-width: 819px)': {
      padding: '0 24px'
    },
    '@media (max-width: 399px)': {
      padding: '0'
    }
  },
  active: {
    fontWeight: 'bold'
  },
  icons: {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    '@media (max-width: 749px)': {
      position: 'absolute',
      top: '16px',
      right: '24px'
    }
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '0',
    fontFamily: "'Nunito', sans-serif",
    '@media (max-width: 749px)': {
      position: 'absolute',
      top: '20px',
      left: '24px'
    }
  },
  home: {
    '@media (max-width: 799px)': {
      display: "none"
    }
  }
})

const RouteLink = React.forwardRef((props, ref) => (
  <NavLink innerRef={ref} {...props} />
));


const Header = () => {
  const classes = useStyles();
  return(
    <Container maxWidth="lg" className={classes.header}>
      <Box className={classes.nav}>
        <Typography component="h1" variant="h5" className={classes.title}>
          <Link component={RouteLink} underline="none" color="inherit" exact to="/">
            Alex Shopov
          </Link>
        </Typography>
        <Container maxWidth="xs">
          <Toolbar component="nav" className={classes.toolbar}>
            <Link component={RouteLink} color="inherit" className={classes.home} activeClassName={classes.active} exact to="/">Home</Link>
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
            <span style={{ fontSize: '1.5em', marginLeft: '1em'}}>
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
