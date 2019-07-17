import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';


import strava from '../images/chrome_9dqA9NTKTI.jpg';
import worm from '../images/chrome_7VrVtR8vY3.png';


const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
    // color: '#f3f3f3'
  },
  paper: {
    // padding: theme.spacing(2),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    // paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
});

const Project = (props) => {
  const classes = useStyles();
  return(
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          component="img"
          src={strava}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h5">
            {props.name}
          </Typography>
          <Typography variant="body1">
            Used: {props.tools}, {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <Link href="https://github.com/ajshopov">
              Link
            </Link>
          </Button>
          <Button size="small" color="primary">
            Source Code
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
};

export default Project;