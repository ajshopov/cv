import React from "react";
import urls from "../../lib/Resources";
import categories from "../../lib/ResourceCategories";
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Label from '@mui/icons-material/LabelImportant';
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
  resourceList: {
    '@media (max-width: 599px)': {
      padding: '0'
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
  let counter = 0;
  return (
    <main>
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
      <Container maxWidth="md" className={classes.resourceList}>
        <Container>
          {categories.map((category, index) => {
            return (
              <div>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{category}</Typography>
                <List sx={{ pb: 4, pt : 0 }}>
                  {urls[index].map((listing, index) => {
                    {counter++;}
                    return (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <Typography className={classes.numbers}>
                            {("00" + counter).slice(-2)}
                          </Typography>
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Link
                              className={classes.itemText}
                              color="inherit"
                              underline="hover"
                              href={listing.linkUrl}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              {listing.title}
                            </Link>
                          }
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </div>
            );
          })}
          </Container>
      </Container>
    </main>
  );
}

export default Resources;