import React from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Home = () => (
  <div>
    <Container maxWidth="sm">
      <Typography variant="h5" color="textSecondary" gutterBottom>
        Hi, I'm Alex, a front-end web developer. This is my personal portfolio website. Check it out on the following page or get in contact using the links below.
      </Typography>
    </Container>
    <Typography variant="body1">
      Contact details here
      Links to github, linkedin
    </Typography>
  </div>

);

export default Home;