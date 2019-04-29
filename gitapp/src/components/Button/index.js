import React from "react";
import "./styles.css";

const Button = props => (
  <button className="btn" onClick={props.onClick}>
    {props.children}
  </button>
);

export default Button;
