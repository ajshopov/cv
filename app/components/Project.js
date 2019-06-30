import React from "react";

const Project = (props) => (
  <div>
    <h4>{props.name}</h4>
    <p>{props.tools}</p>
    <p>{props.desc}</p>
  </div>
);

export default Project;