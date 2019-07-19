import React from "react";
import Urls from "../../lib/linksPage";
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Label from '@material-ui/icons/LabelImportant';

const Resources = () => (
  <Container>
    <Typography gutterBottom>
      A collection of links to resources, tools and articles that I've found useful.
    </Typography>
      <List>
        {Urls.map((listing, index) => {
          return(
            <ListItem key={index}>
              <ListItemIcon>
                <Label />
              </ListItemIcon>
              <Link href={listing.linkUrl} rel="noopener noreferrer" target="_blank">
                {listing.title}
              </Link>
            </ListItem>
          );
        })}
      </List>
  </Container>
);

export default Resources;