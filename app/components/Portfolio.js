import React from "react";
import Project from "./Project";
import projectData from "../../lib/projectData";
import Filter from "./Filter";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
};


class Portfolio extends React.Component {
  state = {
    projects: projectData,
    filteringText: undefined,
    filteredItems: projectData
  }

  handleTextFilter = (text) => {
    this.setState(() => ({ filteringText: text }))
    // console.log(this.state)

    let results = this.state.projects.filter(project => {
      // console.log("search text", text)
      // console.log("proj", project.name.toLowerCase())

      const allTextFields = Object.values(project).map((p) => p.toLowerCase()).join(' ')
      return allTextFields.includes(text.toLowerCase())
    })
    console.log(results)
    this.setState(() => ({ filteredItems: results }))
  }

  render(){
    const { classes } = this.props;
    console.log(this.state.projects)
    return (
      <div className={classes.root}>
      <Filter handleTextFilter={this.handleTextFilter}/>
        <Grid container spacing={3}>
          {this.state.filteredItems.map((project, index) =>
            <Grid item xs={4} sm={6} key={index}>
              <Project 
                name={project.name}
                tools={project.tools}
                desc={project.description}
              />
            </Grid>
          )}
        </Grid>
      </div>
    )
  }
}


export default withStyles(styles)(Portfolio);