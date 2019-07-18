import React from "react";
import Project from "./Project";
import projectData from "../../lib/projectData";
import Filter from "./Filter";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { RadioGroup, Radio } from 'react-radio-group';


const styles = {
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
      // let numberOfWordsInSearch = text.trim().split(' ').length;
      // console.log('numberOfWordsInSearch', numberOfWordsInSearch)
      // let regex = new RegExp(`${text.toLowerCase().trim().split(' ').join('|')}`);
      let setup = text.toLowerCase().trim().split(' ').map((term) => `(?=.*${term})`).join('');
      let regexA = new RegExp(`${setup}.+`);
      // console.log(Object.values(project).slice(0,4))
      const allTextContent = Object.values(project).slice(0,4).map((p) => p.toLowerCase()).join(' ')
      // return allTextContent.includes(text.toLowerCase()); // old method
      // console.log("nuregex", regexA.test(allTextContent))
      // console.log("test", regex.test(allTextContent))
      // console.log("original", allTextContent.includes(text.toLowerCase()))

      return regexA.test(allTextContent);
    })
    console.log('results', results)
    this.setState(() => ({ filteredItems: results }))
  }
  
  render(){
    const { classes } = this.props
    // console.log(this.props)
    // console.log(this.state.projects)
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
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={3}>
            {filteredItems.map((project, index) =>
              <Project
                name={project.name}
                tools={project.tools}
                desc={project.description}
                image={project.image}
                link={project.link}
                source={project.source}
                key={index}
              />
            )}
          </Grid>
        </Container>
      </div>
    )
  }
}


export default withStyles(styles)(Portfolio);