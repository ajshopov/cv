import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";

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
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    // borderTop: '1px solid black'
  },
  projectButtons: {
    fontFamily: "'Nunito', sans-serif",
    color: 'inherit',
    fontSize: '14px'
  }
});

const Project = (props) => {
  const classes = useStyles();
  return(
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea href={props.link}>
          <CardMedia
            className={classes.cardMedia}
            image={props.image}
            title="Image title"
          />
        </CardActionArea>
        <Divider/>
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" component="h3">
            <b>{props.name}</b>
          </Typography>
          <Typography color="textSecondary" style={{ fontSize: '16px'}} gutterBottom>
            <em>{props.tools}</em>
          </Typography>
          <Typography>
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link
              className={classes.projectButtons}
              rel="noopener noreferrer"
              target="_blank"
              href={props.link}
            >
              Link
            </Link>
          </Button>
          {props.source !== '' &&
            <Button size="small">
              <Link
                className={classes.projectButtons}
              rel="noopener noreferrer"
              target="_blank"
              href={props.source}>
                Source Code
              </Link>
            </Button>
          }
        </CardActions>
      </Card>
    </Grid>
  )
};

export default Project;