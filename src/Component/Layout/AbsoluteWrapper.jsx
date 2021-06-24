import React from "react";

const AbsoluteWrapper = props => {
  return <div className="position-absolute h-100 w-100">{props.children}</div>;
};

export default AbsoluteWrapper;
