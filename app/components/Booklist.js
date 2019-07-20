import React from "react";
import books from "../../lib/Booklist";
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import Label from '@material-ui/icons/LabelImportant';


const Booklist = () => (
  <div>
    <Typography gutterBottom>
    A selection of tech, business and self-imporvement books that have shaped my thinking.
    </Typography>
    <List>
      {books.map((book, index) => {
        return (
          <ListItem key={index}>
            <ListItemIcon>
              <Label />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link href={book.url} rel="noopener noreferrer" target="_blank">
                  {book.title}
                </Link>
              }
              secondary={book.author}
            />
          </ListItem>
        );
      })}
    </List>
  </div>
);

export default Booklist;