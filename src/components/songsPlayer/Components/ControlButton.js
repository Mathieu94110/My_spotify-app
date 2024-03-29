import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (props) => (
  <div className={props.className} onClick={props.onClick}>
    <FontAwesomeIcon icon={props.icon} color={props.color} />
  </div>
);

export default Button;
