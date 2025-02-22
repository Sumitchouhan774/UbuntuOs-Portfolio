import React from "react";

function icons(props) {
    return <img className="icons" src={props.place} alt="social-icon" onClick={props.onClick}/>;
}

export default icons;