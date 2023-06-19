import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
  },
  menu: {
    fontSize: '0.875rem',
    color: "inherit",
    textDecoration: "none",
  }
})

const RouteLink = React.forwardRef((props, ref) => (
  <NavLink ref={ref} {...props} />
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
            <Link component={RouteLink} className={`${classes.home} ${classes.menu}`} activeClassName={classes.active} exact to="/">Home</Link>
            <Link component={RouteLink} className={classes.menu} activeClassName={classes.active} to="/portfolio">Portfolio</Link>
            <Link component={RouteLink} className={classes.menu} activeClassName={classes.active} to="/resources">Resources</Link>
            <Link component={RouteLink} className={classes.menu} activeClassName={classes.active} to="/booklist">Booklist</Link>
          </Toolbar>
        </Container>
        <Box className={classes.icons}>
          <Link
            href="https://www.linkedin.com/in/alexshopov/"
            rel="noopener noreferrer"
            target="_blank"
            color="inherit"
            title="LinkedIn Profile"
          >
            <span>
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </Link>
          <Link
            style={{ marginLeft: '1.5em' }}
            href="https://github.com/ajshopov"
            rel="noopener noreferrer"
            target="_blank"
            color="inherit"
            title="Github Profile"
          >
            <span>
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </Link>
          <Link
            style={{ marginLeft: '1.5em' }}
            href="https://codepen.io/Hawka"
            rel="noopener noreferrer"
            target="_blank"
            color="inherit"
            title="Codepen Profile"
          >
            <span>
              <FontAwesomeIcon icon={faCodepen} />
            </span>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
