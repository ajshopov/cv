import React from "react";
import Header from "../components/Header";
import urls from "../../lib/Resources";
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import Label from '@material-ui/icons/LabelImportant';
import { makeStyles } from '@material-ui/styles';

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
  numbers: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2rem',
    color: '#53717A'
  },
  resources: {
    '@media (max-width: 599px)': {
      padding: '0',
    }
  },
  itemText: {
    '@media (max-width: 599px)': {
      fontSize: '1rem'
    }
  }
})

const Resources = () => {
  const classes = useStyles();
  return (
    <main>
      <Header />
      <Container maxWidth="xl" className={classes.blue}>
        <Container maxWidth="sm" className={classes.hero}>
          <Typography component="h2" variant="h3" className={classes.header}>
            Resources
          </Typography>
          <Typography variant="h5" className={classes.intro}>
            A collection of links to resources, tools and articles that I've found useful.
          </Typography>
        </Container>
      </Container>
      <Container maxWidth="md" className={classes.resources}>
        <List>
          {urls.map((listing, index) => {
            return(
              <ListItem key={index}>
                <ListItemIcon>
                  <Typography className={classes.numbers}>
                    {('00' + (index + 1)).slice(-2)}
                  </Typography>
                </ListItemIcon>
                <ListItemText
                primary={
                  <Link 
                    className={classes.itemText}
                    color="inherit"
                    href={listing.linkUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {listing.title}
                  </Link>}
                />
              </ListItem>
            );
          })}
        </List>
      </Container>
    </main>
  );
}

export default Resources;