import React from "react";

function Edu(props) {
    return <div className="edu-box">
    <ul>
    <li>
    <h2>{props.name}</h2>
    <p className="date">{props.date}</p>
    <h3>{props.field}</h3>
    <p>{props.number}</p>
    </li>
    </ul>
</div>;
}

export default Edu;