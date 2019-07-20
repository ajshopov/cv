import React from "react";
import Project from "./Project";
import projectData from "../../lib/projectData";
import Filter from "./Filter";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

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

const tags = [
  'API',
  'General Assembly',
  'Scss',
  'RSpec',
  'Ruby',
  'Rails',
  'Javascript',
  'jQuery',
  'React',
  'Redux',
  'Oauth',
  'Game'
];


class Portfolio extends React.Component {
  state = {
    projects: projectData,
    filteringText: '',
    tags: tags,
    selectedOption: false,
    filteredItems: projectData
  }

  handleRadioButtons = (event) => {
    console.log("value", event.target.value)
    event.persist();
    this.setState(() => (
      {filteringText: event.target.value, radioOption: event.target.value }
    ))
    this.updateResults(event.target.value)
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
        <Box component="span" m={1}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="Gender"
              name="gender1"
              value={this.state.radioOption || ''}
              onChange={this.handleRadioButtons}
            >
              {tags.map((tag) => 
                <FormControlLabel
                  value={tag}
                  control={<Radio />}
                  label={tag}
                  labelPlacement="end"
                  key={tag}
                />
              )}
            </RadioGroup>
          </FormControl>
        </Box>
        <Filter
          filterField={this.state.filteringText}
          handleTextFilter={this.handleTextFilter}
          clearFilter={this.clearFilters}
        />
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