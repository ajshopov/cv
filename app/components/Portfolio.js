import React from "react";
import Project from "./Project";
import projectData from "../../lib/projectData";
import Filter from "./Filter";

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
      return project.name.toLowerCase().includes(text.toLowerCase())
    })
    console.log(results)
    this.setState(() => ({ filteredItems: results }))
  }

  render(){
    console.log(this.state.projects)
    return (
      <div>
        Portfolio
        <Filter handleTextFilter={this.handleTextFilter}/>
        {this.state.filteredItems.map((project, index) =>
          <Project key={index} projectText={project.name}/>
        )}
      </div>
    )
  }
}


export default Portfolio;