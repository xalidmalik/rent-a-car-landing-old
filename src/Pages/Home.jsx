import React, { Component } from "react";
import Hero from "../Component/Home/Hero";
import { Spring, animated } from "react-spring/renderprops";
import MiniFooter from "../Component/Home/MiniFooter";
import DatePicker from "../Component/UI/DatePicker/DatePicker";
import withRedux from "../Hoc/withRedux";
import History from "../Helpers/History";

class Home extends Component {
  state = {
    startDateTime: null,
    endDateTime: null
  };

  componentDidUpdate(prevProps) {
    const {
      availableCarIsLoading,
      availableCar,
      availableCarErrorMessage
    } = this.props;

    if (
      prevProps.availableCarIsLoading &&
      !availableCarIsLoading &&
      availableCar
    ) {
      localStorage.setItem("startDate", this.state.startDateTime);
      localStorage.setItem("endDate", this.state.endDateTime);
      History.push("mevcut-arabalar");
    }
  }
  startdate = value => {
    this.setState({ startDate: value });
  };

  render() {
    return (
      <div className="home page">
        <Hero />

        <Spring
          from={{ transform: "translateY(100%)", height: "38%" }}
          to={{
            transform: "translateY(0)",
            height: "38%"
          }}
          config={{ mass: 1, tension: 150, friction: 40 }}
          delay={100}
        >
          {props => (
            <animated.div style={props} className="down">
              <div className="container h-100">
                <div className="h-100 p-3 d-flex">
                  <div className="w-100 my-auto">
                    <h1 className="font-weight-bold mb-3">Rezervasyon Yap!</h1>
                    <div className="form-row">
                      <div className="col-36 col-md-28 col-lg-28 col-xl-28">
                        <DatePicker
                          openDirection="up"
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
                      <div className="col-36 col-md-8 col-lg-8 col-xl-8">
                        <button
                          onClick={() => {
                            this.props.fetchAvailableCars(
                              this.state.startDateTime,
                              this.state.endDateTime
                            );
                          }}
                          className="btn btn-primary w-100 btn-height search-mobile"
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
                            "Ara"
                          )}
                        </button>
                      </div>
                      <MiniFooter />
                    </div>
                  </div>
                </div>
              </div>
            </animated.div>
          )}
        </Spring>
      </div>
    );
  }
}

export default withRedux(Home);
