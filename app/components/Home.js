import React from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => (
  <div>
    <Container maxWidth="sm" style={{marginBottom: '32px'}}>
      <Typography variant="h5" color="textSecondary">
        Hi, I'm Alex, a front-end web developer. This is my personal portfolio website. Check out my work on the following page and get in contact using the links below.
      </Typography>
    </Container>
    <Typography style={{ marginBottom: '32px' }}>
      Originally working as an engineer in the mining industry, I’ve transitioned into web development through a mix of self-directed learning, a General Assembly bootcamp, and as a front-end developer at Adelphi Digital. My personal goal as a web developer is to combine my interests in productivity, data, and continuous learning to improve the delivery of information through great web interfaces.    </Typography>
    <Container maxWidth="xs">
      <Toolbar component="nav" style={{ justifyContent: 'space-around' }}>
        <Link 
          href="https://www.linkedin.com/in/alexshopov/"
          rel="noopener noreferrer"
          target="_blank"
          color="inherit"
        >
          <span style={{fontSize: '3em'}}>
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
        </Link>
        <Link
          href="https://github.com/ajshopov"
          rel="noopener noreferrer"
          target="_blank"
          color="inherit"
        >
          <span style={{ fontSize: '3em' }}>
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </Link>
      </Toolbar>
    </Container>
  </div>

);

export default Home;