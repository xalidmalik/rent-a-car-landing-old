import React from "react";

const Button = props => {
  return (
    <button
      className={`btn btn-${props.Color == null ? "primary" : props.Color}`}
      style={{ height: "3.5rem" }}
      onClick={props.OnClick}
      type={props.Type}
      form={props.Form}
    >
      {props.Title}
    </button>
  );
};

export default Button;
