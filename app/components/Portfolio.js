import React from "react";
import Header from "../components/Header";
import Project from "./Project";
import projectData from "../../lib/projectData";
import Filter from "./Filter";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
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
  'SCSS',
  'MaterializeCSS',
  'Jade',
  'Slim',
  'Javascript',
  'jQuery',
  'Webpack',
  'React',
  'Redux',
  'Ruby',
  'Rails',
  'RSpec',
  'Adelphi Digital',
  'Squiz',
  'General Assembly',
  'API',
  'OAuth',
  'Game',
  'PostgreSQL'
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
    // console.log("value", event.target.value)
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
    // console.log(this.state)
  }

  updateResults = (text) => {
    
    let results = this.state.projects.filter(project => {
      // let numberOfWordsInSearch = text.trim().split(' ').length;
      // console.log('numberOfWordsInSearch', numberOfWordsInSearch)
      // let regex = new RegExp(`${text.toLowerCase().trim().split(' ').join('|')}`);
      let setup = text.toLowerCase().trim().split(' ').map((term) => `(?=.*${term})`).join('');
      let regexA = new RegExp(`${setup}.+`);
      // console.log(Object.values(project).slice(0,4))
      const allTextContent = Object.values(project).slice(0,4).map((p) => p.toLowerCase()).join(' ')
      // return allTextContent.includes(text.toLowerCase()); // old method

      return regexA.test(allTextContent);
    })
    // console.log('results', results)
    this.setState(() => ({ filteredItems: results }))
  }

  handleListToggle = () => {
    this.setState(() => ({ listOpen: !this.state.listOpen }));
    // console.log(this.state.listOpen)
  }
  
  render(){
    const { classes } = this.props
    const { tags, filteredItems } = this.state;
    return (
      <main>
        <Header />
        <Container maxWidth="xl" className={classes.blue}>
          <Container maxWidth="sm" className={classes.hero}>
            <Typography component="h2" variant="h3" className={classes.header}>
              Portfolio
            </Typography>
            <Typography variant="h5" className={classes.intro}>
              A catalog of my past work. Use the filters to see what tools I've been using.
            </Typography>
          </Container>
        </Container>
        <Container>
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
                  <ListItemText primary={this.state.listOpen ? 'Hide filters' : 'Show all filters' } />
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
        </Container>
      </main>
    )
  }
}


export default withStyles(styles)(Portfolio);