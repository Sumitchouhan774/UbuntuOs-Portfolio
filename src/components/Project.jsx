import React from "react";

function Project(props) {
    return <a className="project-link" href={props.link}><div className="project-container">
    <h2><span className="highlight">{props.name}</span> <span className="date">{props.date}</span></h2>
    <p>{props.content}</p>
    </div></a>;
};
export default Project;