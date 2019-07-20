import React from "react";
import urls from "../../lib/Resources";
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import Label from '@material-ui/icons/LabelImportant';

const Resources = () => (
  <div>
    <Typography gutterBottom>
      A collection of links to resources, tools and articles that I've found useful.
    </Typography>
      <List>
        {urls.map((listing, index) => {
          return(
            <ListItem key={index}>
              <ListItemIcon>
                <Label />
              </ListItemIcon>
              <ListItemText
                primary={<Link href={listing.linkUrl} rel="noopener noreferrer" target="_blank">
                  {listing.title}
                </Link>}
              />
            </ListItem>
          );
        })}
      </List>
  </div>
);

export default Resources;