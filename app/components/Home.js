import React from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  blue: { 
    marginBottom: '32px',
    backgroundColor: '#F7FAFB',
  }
})

const Home = () => {
  const classes = useStyles();
  return(
    <main className={classes.home}>
      <Container maxWidth="sm" className={classes.blue}>
        <Avatar alt="me" src={require('../images/alexander-bw.jpg')} style={{width: "150px", height: "180px"}} />

        <Typography variant="h5">
          Hi, I'm Alex, a front-end web developer. This is my personal portfolio website. Check out my work on the following page and get in contact using the links below.
        </Typography>
      </Container>
      <Typography style={{ marginBottom: '32px' }}>
        Originally working as an engineer in the mining industry, I’ve transitioned into web development through a mix of self-directed learning, a General Assembly bootcamp, and as a front-end developer at Adelphi Digital. My personal goal as a web developer is to combine my interests in productivity, data, and continuous learning to improve the delivery of information through great web interfaces.
      </Typography>
    </main>
  )
}

export default Home;