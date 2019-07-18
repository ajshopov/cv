import React from "react";
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";

const Links = () => (
  <Container>
    <Typography gutterBottom>
      A collection of links to useful tools, resources and articles that I've found useful.
    </Typography>
    <Typography>
      <List>
        <ListItem>
          <Link href="https://frontendmasters.com/books/front-end-handbook/2019/">
            Front-end Developer Handbook 2019 by Cody Lindley
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://medium.com/@js_tut/the-complete-css-flex-box-tutorial-d17971950bdc">
            The Complete CSS Flex Box Tutorial
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://practicaltypography.com/summary-of-key-rules.html">
            Butterick’s Practical Typography - Summary of key rules
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://picular.co/">
            Picular - Google, but for colors.
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://frontendmasters.com/books/front-end-handbook/2019/">
            Front-end Developer Handbook 2019 by Cody Lindley
          </Link>
        </ListItem>
      </List>
    </Typography>
  </Container>
);

export default Links;