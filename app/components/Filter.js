import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    margin: "4px 8px",
    verticalAlign: "bottom"
  }
}

class Filter extends React.Component {
  handleChange = (text) => {
    this.props.handleTextFilter(text)
  }

  render(){
    const { classes } = this.props
    return (
      <div>
        <TextField
          id="standard-name"
          label="Filter"
          className=""
          value={this.props.filterField}
          onChange={(e) => {
            console.log(e.target.value)
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