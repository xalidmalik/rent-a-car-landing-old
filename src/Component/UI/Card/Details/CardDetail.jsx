import React from "react";
import Button from "../../Button/Button";
import CardIcon from "../CardIcon";
import CardImage from "../CardImage";
import CustomerForm from "../../Form/CustomerForm";
import {
  StringFuelType,
  StringGearType,
  StringCarClasses
} from "../../../../Helpers/Converter";
import moment from "moment";

const UpSide = props => {
  return (
    <div className="row mt-3">
      <div className="col-36 p-0">
        <div className="p-3">
          <button onClick={props.Close} type="button" className="btn">
            <i className="material-icons md-18 mx-auto">arrow_back</i>
          </button>
        </div>
      </div>
    </div>
  );
};
const LeftSide = props => {
  const { Cars } = props;
  const Days = () => {
    let beginDate = localStorage.getItem("startDate");
    let endDate = localStorage.getItem("endDate");

    let diff = moment(beginDate).diff(endDate, "day");

    if (diff == 0) {
      return 1;
    }

    if (moment(beginDate).hours() < moment(endDate).hours()) {
      return diff + 1;
    }

    return diff;
  };
  return (
    <div className="col-36 col-md-18 col-lg-18 col-xl-18 h-100 py-3 px-5 text-center position-relative card-bg">
      <div className="absolute-header d-flex justify-content-center align-items-center">
        <button
          onClick={props.Close}
          type="button"
          className="btn d-flex position-absolute"
          style={{ left: "1rem" }}
        >
          <i className="material-icons md-18 mx-auto">arrow_back</i>
        </button>
        <h5 className="font-weight-bold m-0">Araba Detayları</h5>
      </div>
      <div className="step-content-margin">
        <h2 className="card-title font-weight-bold mb-1">
          {Cars.BrandName + " " + Cars.ModelName}
        </h2>
        <p className="text-light-2">
          <strong>Motor: </strong> {Cars.EngineCapacity}
          {"  |  "} <strong>Üretim Yılı: </strong> {Cars.Year}
        </p>
        <CardImage
          Img={Cars.VisualId}
          Alt={Cars.BrandName + " " + Cars.ModelName}
          AddClass="px-4 pt-0"
        />
        <div className="CarDetails">
          <h6>Özellikler</h6>
          <div className="mb-2 w-100 d-flex justify-content-center">
            <CardIcon
              Icon="local_gas_station"
              Title={StringFuelType(Cars.FuelType)}
            />
            <CardIcon
              Icon="airline_seat_legroom_normal"
              Title={`${Cars.NumberOfDoors} Kişi`}
            />
            <CardIcon Icon="rowing" Title={StringGearType(Cars.GearType)} />
            <CardIcon Icon="usb" Title="Yok" />
            <CardIcon Icon="bluetooth" Title="Yok" />
            <CardIcon Icon="loyalty" Title={StringCarClasses(Cars.Classes)} />
          </div>
        </div>
        <p className="mb-1 text-light-2">{`${Days()} günlük fiyat`}</p>
        <h1 className="font-weight-bold mb-0">{Cars.Price * Days()} TL</h1>
        <p className="text-light-2">
          Bu aracın günlük fiyatı {Cars.Price} tl + KDV dir.
        </p>
        {/* <p className="text-light-2">
          Online ödeme yaparak %20'e yakın tasarruf edin
        </p> */}
      </div>
    </div>
  );
};

const RightSide = props => {
  const { Cars } = props;

  return (
    <div className="col-36 col-md-18 col-lg-18 col-xl-18 h-100 py-3 px-5 position-relative card-bg">
      <div className="absolute-header d-flex justify-content-center align-items-center">
        <h5 className="font-weight-bold m-0">Müşteri Detayları</h5>
      </div>
      <div className="step-content-margin">
        <CustomerForm Cars={Cars} />
      </div>
    </div>
  );
};
const CardDetail = props => {
  const { Cars, Close } = props;
  return (
    <div className="container h-100 overflow-auto">
      {/* <UpSide Close={Close} /> */}

      <div className="row d-flex align-items-strech ">
        <LeftSide Cars={Cars} Close={Close} />
        <RightSide Cars={Cars} />
      </div>
    </div>
  );
};

export default CardDetail;
