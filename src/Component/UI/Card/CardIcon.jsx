import React from "react";

const CardIcon = props => {
  return (
    <small className={`mr-1 card-icon ${props.addClass}`}>
      <i className="material-icons md-18 mx-auto">{props.Icon}</i>
      {props.Title}
    </small>
  );
};

export default CardIcon;
