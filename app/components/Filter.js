import React from "react";

export default class Filter extends React.Component {
  handleChange = (text) => {
    this.props.handleTextFilter(text)
  }

  render(){
    return (
      <div>
        <h5>Filter</h5>
        <label>filter: </label>
        <input
          type="text"
          // value={this.props.selectedProjects}
          onChange={(e) => {
            console.log(e.target.value)
            this.handleChange(e.target.value);
          }} />
      </div>
    );
  }
}
