import React from "react";
import Project from "./Project";
import projectData from "../../lib/projectData";
import Filter from "./Filter";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { RadioGroup, Radio } from 'react-radio-group'

const styles = {
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  }
};


class Portfolio extends React.Component {
  state = {
    projects: projectData,
    filteringText: '',
    tags: ['general assembly', 'api'],
    selectedOption: false,
    filteredItems: projectData
  }

  handleRadioButtons = (value) => {
    this.setState(() => (
      {filteringText: value, radioOption: value }
    ))
    this.updateResults(value)
  }

  handleTextFilter = (text) => {
    this.setState(() => ({ filteringText: text }))
    this.updateResults(text)
  }

  clearFilters = () => {
    this.setState(() => ({ filteringText: '', radioOption: null }))
    this.updateResults('')
    console.log(this.state)
  }

  updateResults = (text) => {
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
    // console.log(this.state)
    const { tags, filteredItems } = this.state;
    return (
      <div className={classes.root}>
        <Filter filterField={this.state.filteringText} handleTextFilter={this.handleTextFilter}/>
        <button onClick={this.clearFilters}>clear</button>
        <RadioGroup name="tags" value={this.state.radioOption} onChange={this.handleRadioButtons} className="tags">
          {tags.map((tag) => 
            <label key={tag}>
              <Radio value={tag} checked={this.state.radioOption === tag}/> {tag}
            </label>
          )}
        </RadioGroup>
        <Grid container spacing={3}>
          {filteredItems.map((project, index) =>
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