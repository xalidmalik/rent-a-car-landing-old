import React, { Component } from "react";
import CardList from "../Component/UI/Card/CardList";
import withRedux from "../Hoc/withRedux";
import DatePicker from "../Component/UI/DatePicker/DatePicker";

class AvailableCars extends Component {
  state = {
    startDateTime: localStorage.getItem("startDate"),
    endDateTime: localStorage.getItem("endDate")
  };

  componentDidMount() {
    if (!this.props.availableCar || this.props.availableCar == undefined) {
      let beginDate = localStorage.getItem("startDate");
      let endDate = localStorage.getItem("endDate");
      this.props.fetchAvailableCars(beginDate, endDate);
    }
  }

  componentDidUpdate(prevProps) {
    const { startDateTime, endDateTime } = this.state;

    if (startDateTime) {
      localStorage.setItem("startDate", startDateTime);
    }
    if (endDateTime) {
      localStorage.setItem("endDate", endDateTime);
    }
  }

  render() {
    return (
      <div className="absolute-bg overflow-auto">
        <div className="container h-100">
          <div className="row">
            <div className="col mt-3">
              <div className="mb-3 bg-light shadow-sm rounded">
                <div className="row">
                  <div className="col-36 col-md-28 col-lg-28 col-xl-26">
                    <div className="p-3">
                      <DatePicker
                        openDirection="down"
                        bt={this.state.startDateTime}
                        startDate={value => {
                          if (value != this.state.startDateTime) {
                            this.setState({ startDateTime: value });
                          }
                        }}
                        endDate={value => {
                          {
                            if (value != this.state.endDateTime) {
                              this.setState({ endDateTime: value });
                            }
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-36 col-md-8 col-lg-8 col-xl-10">
                    <div className="p-3">
                      <button
                        onClick={() => {
                          this.props.fetchAvailableCars(
                            this.state.startDateTime,
                            this.state.endDateTime
                          );
                        }}
                        className="btn btn-secondary w-100 btn-height search-mobile"
                      >
                        {this.props.availableCarIsLoading ? (
                          <>
                            <span
                              className="spinner-grow spinner-grow-sm"
                              role="status"
                              aria-hidden="true"
                            />
                            Aranıyor...
                          </>
                        ) : (
                          "Yeniden Ara"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {this.props.availableCar ? (
            <CardList Cars={this.props.availableCar} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRedux(AvailableCars);
