import React from "react";
import Project from "./Project";
import projectData from "../../lib/projectData";
import Filter from "./Filter";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const styles = {
  root: {
    // flexGrow: 1,
    // color: '#f3f3f3'
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
  radioList: {
    display: 'inline'
  },
  list: {
    marginBottom: '32px'
  }
};

const tags = [
  'Adelphi Digital',
  'General Assembly',
  'Javascript',
  'Material-UI',
  'Materializecss',
  'Scss',
  'React',
  'Redux',
  'RSpec',
  'Ruby',
  'Rails',
  'jQuery',
  'API',
  'Oauth',
  'Game'
];


class Portfolio extends React.Component {
  state = {
    projects: projectData,
    filteringText: '',
    tags: tags,
    selectedOption: false,
    filteredItems: projectData,
    listOpen: false
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

  handleListToggle = () => {
    this.setState(() => ({ listOpen: !this.state.listOpen }));
    console.log(this.state.listOpen)
  }
  
  render(){
    const { classes } = this.props
    // console.log(this.props)
    // console.log(this.state.projects)
    // console.log(this.state)
    const { tags, filteredItems } = this.state;
    return (
      <div className={classes.root}>
        <Filter
          filterField={this.state.filteringText}
          handleTextFilter={this.handleTextFilter}
          clearFilter={this.clearFilters}
        />
        <List disablePadding className={classes.list}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="Gender"
              name="gender1"
              value={this.state.radioOption || ''}
              onChange={this.handleRadioButtons}
            >
              <ListItem button onClick={this.handleListToggle}>
                <ListItemText primary="Show all filters" />
                {this.state.listOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.listOpen} timeout="auto" unmountOnExit>
                {tags.map((tag) => 
                  <ListItem key={tag} dense className={classes.radioList}>
                    <FormControlLabel
                      value={tag}
                      control={<Radio />}
                      label={tag}
                      labelPlacement="end"
                    />
                  </ListItem>
                )}
              </Collapse>
            </RadioGroup>
          </FormControl>
        </List>
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
      </div>
    )
  }
}


export default withStyles(styles)(Portfolio);