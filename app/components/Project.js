import React from "react";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";

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
          {props.link !== '' &&
          <Button size="small">
            <Link
              className={classes.projectButtons}
              rel="noopener noreferrer"
              target="_blank"
              href={props.link}>
                Link
            </Link>
          </Button>
          }
          {props.source !== '' &&
            <Button size="small">
              <Link
                className={classes.projectButtons}
                rel="noopener noreferrer"
                target="_blank"
                href={props.source}>
                  Repo
              </Link>
            </Button>
          }
        </CardActions>
      </Card>
    </Grid>
  )
};

export default Project;