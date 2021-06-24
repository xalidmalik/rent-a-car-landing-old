import React from "react";
import moment from "moment";

const CardPrice = props => {
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
    <div className="card-footer text-center p-3 h-100 position-relative">
      <div className="row h-100 d-flex align-items-center">
        <div className="col col-xl-36">
          <p className="mb-1 text-muted">
            {`${Days()} 
            günlük fiyat`}
          </p>
          <h1 className="font-weight-bold">{`${Cars.Price * Days()} TL`}</h1>
        </div>
        <div className="col col-xl-36">
          <button onClick={props.OnClick} className="btn btn-primary list-btn">
            Rezervasyon Yap
          </button>
        </div>
        <div className="col-36  ">
          <small className="text-muted">
            {`Bu aracın günlük fiyatı ${Cars.Price} tl + KDV dir.`}
          </small>
        </div>
      </div>
    </div>
  );
};

export default CardPrice;
