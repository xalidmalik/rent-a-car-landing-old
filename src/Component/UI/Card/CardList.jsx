import React from "react";
import Card from "./SingleCard/Card";

const CardList = props => {
  return (
    <div className="row">
      <div className="col">
        {props.Cars.map((i, index) => {
          return <Card Cars={i} key={index} Index={index} />;
        })}
      </div>
    </div>
  );
};

export default CardList;
