import React from "react";

const InputData = props => {
  return (
    <div className="form-group mb-2">
      {props.Title == null ? (
        ""
      ) : (
        <small className="font-weight-bold m-0">{props.Title}</small>
      )}
      <input
        type="text"
        className="w-100 form-control input-inset"
        placeholder={props.Placeholder}
      />
      <small className="form-text text-muted pl-1">{props.Small}</small>
    </div>
  );
};

export default InputData;
