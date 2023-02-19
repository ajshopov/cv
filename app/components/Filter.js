import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@mui/icons-material/Search';
import withStyles from '@mui/styles/withStyles';

const styles = {
  root: {
    display: 'flex',
    padding: '0'

  },
  search: {
    margin: '0 8px 0 0'
  },
  button: {
    fontFamily: "'Nunito', sans-serif"
  }
}

class Filter extends React.Component {
  handleChange = (text) => {
    this.props.handleTextFilter(text)
  }

  render(){
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <TextField
          id="standard-name"
          label="Search"
          className={classes.search}
          value={this.props.filterField}
          onChange={(e) => {
            // console.log(e.target.value)
            this.handleChange(e.target.value);
          }}
          margin="dense"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Button 
          variant="outlined"
          onClick={this.props.clearFilter}
          className={classes.button}
        >
          Clear
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Filter);