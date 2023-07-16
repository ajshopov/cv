import React from "react";
import Project from "./Project";
import projectData from "../../lib/projectData";
import Filter from "./Filter";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import withStyles from '@mui/styles/withStyles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Link } from "@mui/material";

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
  filterToggle: {
    paddingLeft: '0',
    paddingRight: '0'
  },
  radioList: {
    padding: '0'
  },
  list: {
    marginBottom: '32px'
  }
};

const tags = [
  'Matrix CMS',
  'Funnelback',
  'Javascript',
  'jQuery',
  'Webpack',
  'React',
  'Redux',
  'SCSS',
  'Bootstrap',
  'MaterializeCSS',
  'Jade',
  'Slim',
  'Ruby',
  'Rails',
  'RSpec',
  'PostgreSQL',
  'API',
  'OAuth',
  'Adelphi Digital',
  'Squiz',
  'General Assembly'
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
        <Container maxWidth="xl" className={classes.blue}>
          <Container maxWidth="sm" className={classes.hero}>
            <Typography component="h2" variant="h3" className={classes.header}>
              Portfolio
            </Typography>
            <Typography variant="h5" className={classes.intro}>
              A catalog of my past projects. Search tags or use the filters to see what tools I've been using. My latest work has been with the Squiz&nbsp;
              <Link
                rel="noopener noreferrer"
                color="inherit"
                target="_blank"
                href="https://www.squiz.net/">
                Matrix CMS
              </Link>
              &nbsp;and&nbsp;
              <Link
                rel="noopener noreferrer"
                color="inherit"
                target="_blank"
                href="https://www.squiz.net/search">
                Funnelback Search
              </Link>.
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
                <ListItem button onClick={this.handleListToggle} className={classes.filterToggle}>
                  <ListItemText primary={this.state.listOpen ? 'Hide filters' : 'Show all filters' } />
                  {this.state.listOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.listOpen} timeout="auto" unmountOnExit>
                  <Grid container>
                    {tags.map((tag) => 
                      <Grid key={tag} item xs={6} sm={4} md={3} lg={2}>
                        <ListItem key={tag} className={classes.radioList}>
                          <FormControlLabel
                            value={tag}
                            control={<Radio />}
                            label={tag}
                            labelPlacement="end"
                          />
                        </ListItem>
                      </Grid>
                    )}
                  </Grid>

                </Collapse>
              </RadioGroup>
            </FormControl>
          </List>
          <Grid container spacing={3} paddingBottom={3}>
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