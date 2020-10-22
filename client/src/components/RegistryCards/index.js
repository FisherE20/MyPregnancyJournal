import React from "react";
import "./style.css";

function RegistryCard(props) {
  return (
    <div className="grid-container">
  <div className="grid-x grid-margin-x small-up-2 medium-up-3">
    <div className="cell">
      <div className="card">
        <img  alt={props.name} src={props.image}>
        <div className="card-section">
        <h4>{props.name}</h4>
          <p>{props.description}</p>
          <a href= {props.url} className="button">View</a>
        </div>
      </div>
    </div>
    <div className="cell">
      <div className="card">
        <img {props.name} src={props.image}>
        <div className="card-section">
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          <a href= {props.url} className="button">View</a>
        </div>
      </div>
    </div>
    <div className="cell">
      <div className="card">
        <img alt={props.name} src={props.image}>
        <div className="card-section">
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          <a href= {props.url} className="button">View</a>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default RegistryCard;

