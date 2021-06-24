import React from "react";
import CardIcon from "../CardIcon";
import {
  StringFuelType,
  StringGearType,
  StringCarClasses
} from "../../../../Helpers/Converter";

const CardBody = props => {
  const { Cars } = props;
  return (
    <div className="card-body h-100">
      <h3 className="card-title font-weight-bold mb-1">
        {Cars.BrandName + " " + Cars.ModelName}
      </h3>
      <p className="text-muted">
        <strong>Motor: </strong>
        {Cars.EngineCapacity}
        {"  |  "} <strong>Üretim Yılı:</strong> {Cars.Year}
      </p>

      <div className="row">
        <div className="col">
          <h6>Özellikler :</h6>
          <div className="mb-2 w-100 d-flex">
            <CardIcon
              Icon="local_gas_station"
              Title={StringFuelType(Cars.FuelType)}
            />
            <CardIcon
              Icon="airline_seat_legroom_normal"
              Title={`${Cars.NumberOfDoors} Kişi`}
            />
            <CardIcon Icon="rowing" Title={StringGearType(Cars.GearType)} />
            <CardIcon Icon="usb" Title="Yok" addClass="card-icon-mobile" />
            <CardIcon
              Icon="bluetooth"
              Title="Yok"
              addClass="card-icon-mobile"
            />
            <CardIcon
              Icon="loyalty"
              Title={StringCarClasses(Cars.Classes)}
              addClass="card-icon-mobile"
            />
          </div>
        </div>
        {/* <div className="col card-dvider" /> */}
        {/* <div className="col-36 h-100 w-100 mt-1 text-muted">
          <p className="m-0">Online ödeme yaparak %20'e yakın tasarruf edin</p>
        </div> */}
      </div>
    </div>
  );
};

export default CardBody;
