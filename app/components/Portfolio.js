import React from "react";
import Project from "./Project";
import projectData from "../../lib/projectData";

class Portfolio extends React.Component {
  state = {
    projects: projectData,
    selectedProjects: undefined
  }

  render(){
    console.log(this.state.projects)
    return (
      <div>
        Portfolio
        {this.state.projects.map((project, index) =>
          <Project key={index} projectText={project.name}/>
        )}
      </div>
    )
  }
}


export default Portfolio;