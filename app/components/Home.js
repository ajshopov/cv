import React from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Home = () => (
  <div>
    <Container maxWidth="sm">
      <Typography variant="h5" paragraph color="textSecondary">
        Hi, I'm Alex, a front-end web developer. This is my personal portfolio website. Check out my work on the following page and get in contact using the links below.
      </Typography>
    </Container>
    <Typography variant="body1">
      &#128679; &#128119; This site is still under construction &#128679; &#128119;
    </Typography>
  </div>

);

export default Home;