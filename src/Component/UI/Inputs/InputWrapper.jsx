import React from "react";

const InputWrapper = props => {
  return (
    <div className="form-group mb-2">
      <small className="font-weight-bold pl-1 m-0">{props.title}</small>
      {props.children}
    </div>
  );
};

export default InputWrapper;
