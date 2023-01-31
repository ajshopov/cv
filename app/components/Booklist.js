import React from "react";
import books from "../../lib/Booklist";
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  blue: {
    marginBottom: '32px',
    backgroundColor: '#F7FAFB',
    height: '256px',
    display: 'flex',
    alignItems: 'center'
  },
  intro: {
    '@media (max-width: 599px)': {
      fontSize: '1.25rem'
    }
  },
  booklist: {
    '@media (max-width: 599px)': {
      padding: '0',
      fontSize: '1rem'
    }
  },
  bookName: {
    '@media (max-width: 599px)': {
      fontSize: '1rem'
    }
  },
  bookAuthor: {
  '@media (min-width: 600px)': {
      fontSize: '1rem'
    }
  },
  numbers: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2rem',
    color: '#53717A'
  }
})

const Booklist = () => {
  const classes = useStyles();
  return(
    <main>
      <Container maxWidth="xl" className={classes.blue}>
        <Container maxWidth="sm" className={classes.hero}>
          <Typography component="h2" variant="h3" className={classes.header}>
            Books
          </Typography>
          <Typography variant="h5" className={classes.intro}>
          A selection of tech, business and self-improvement books that have shaped my thinking.
          </Typography>
        </Container>
      </Container>
      <Container maxWidth="md" className={classes.booklist}>
        <List>
          {books.map((book, index) => {
            return (
              <ListItem key={index}>
                <ListItemIcon>
                  <Typography className={classes.numbers}>
                  {('00'+(index+1)).slice(-2)}
                  </Typography>
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.bookName,
                    secondary: classes.bookAuthor
                  }}
                  primary={
                    <Link 
                      color="inherit"
                      underline="hover"
                      href={book.url} 
                      rel="noopener noreferrer" 
                      target="_blank"
                    >
                      {book.title}
                    </Link>
                  }
                  secondary={book.author}
                />
              </ListItem>
            );
          })}
        </List>
      </Container>
    </main>
  );
}

export default Booklist;