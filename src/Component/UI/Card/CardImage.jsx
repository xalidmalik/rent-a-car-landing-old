import React from "react";
import ImageUrl from "../../../Helpers/ImageUrl";

const CardImage = props => {
  return (
    <div className={`card-header ${props.AddClass}`}>
      <img
        src={ImageUrl(props.Img)}
        className={`card-img-top ${props.AddClassImg}`}
        alt={`${props.Alt} | Ayaz Arac Kiralama`}
      />
    </div>
  );
};

export default CardImage;
