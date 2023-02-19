import React from "react";
import { NavLink } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
import Box from "@mui/material/Box";
import Link from '@mui/material/Link';

const useStyles = makeStyles({
  blue: { 
    marginBottom: '32px',
    backgroundColor: '#F7FAFB',
    height: '480px',
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    width: "150px", 
    height: "180px",
    marginBottom: '32px',
    '@media (max-width: 749px)': {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  textLinks: {
    textDecoration: 'underline'
  },
  intro: {
    '@media (max-width: 599px)': {
      fontSize: '20px'
    }
  },
  hero: {
    '@media (max-width: 499px)': {
      padding: '0 8px'
    }
  }
})

const RouteLink = React.forwardRef((props, ref) => (
  <NavLink ref={ref} {...props} />
));

const Home = () => {
  const classes = useStyles();
  return(
    <main className={classes.home}>
      <Container maxWidth="xl" className={classes.blue}>
        <Container maxWidth="sm" className={classes.hero}>
          <Avatar alt="me" src={require('../images/alexander-bw-small.jpg')} className={classes.avatar} />
          <Typography variant="h5" className={classes.intro}>
            <span style={{ fontWeight: 'bold' }}>Hi, I'm Alex, a front-end web developer.</span>
            <br />
            This is my personal portfolio website. Check out my
            <span> <Link className={classes.textLinks} component={RouteLink} color="inherit" to="/portfolio">portfolio</Link> </span>
            on the following page, have a browse through some of my favourite 
            <span> <Link className={classes.textLinks} component={RouteLink} color="inherit" to="/booklist">books</Link> </span> 
            and 
            <span> <Link className={classes.textLinks} component={RouteLink} color="inherit" to="/resources">resources</Link></span>
            , and get in touch via 
            <span> <Link
              className={classes.textLinks} 
              href="https://www.linkedin.com/in/alexshopov/"
              rel="noopener noreferrer"
              target="_blank"
              color="inherit"
            >LinkedIn
            </Link></span>.
          </Typography>
        </Container>
      </Container>
    </main>
  )
}

export default Home;