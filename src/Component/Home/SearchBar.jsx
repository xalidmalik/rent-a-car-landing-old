import React, { Component } from "react";
import { Spring, animated } from "react-spring/renderprops";
import MiniFooter from "./MiniFooter";
import moment from "moment";
import History from "../../Helpers/History";
import withRedux from "../../Hoc/withRedux";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import { Time } from "../../Helpers/Time";

const begin = moment(new Date(Date.now())).format("MM/DD/YYYY HH:mm");

const end = moment(new Date(Date.now())).format("MM/DD/YYYY HH:mm");

class SearchBar extends Component {
  state = { date: null, focusedInput: false, startDate: null, endDate: null };

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
      localStorage.setItem("startDate", end);
      localStorage.setItem("endDate", begin);
      History.push("mevcut-arabalar");
    }

    if (this.state.startDate && this.state.focusedInput == "startDate") {
      setTimeout(() => {
        this.setState({
          focusedInput: null
        });
      }, 0);
    }
  }

  render() {
    return (
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
            <div>
              <div>
                <select size="10">
                  {Time.map((i, index) => {
                    return <option value={i.value}>{i.data}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="container h-100">
              <div className="h-100 p-3 d-flex">
                <div className="w-100 my-auto">
                  <h1 className="font-weight-bold mb-3">Rezervasyon Yap!</h1>

                  <div className="form-row">
                    <div className="col-36 col-xl-28">
                      <DateRangePicker
                        // withPortal="100%"

                        hideKeyboardShortcutsPanel={true}
                        openDirection={"up"}
                        startDatePlaceholderText={"Başlangı"}
                        endDatePlaceholderText={"Bitiş Tarihi"}
                        required={true}
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        onDatesChange={({ startDate, endDate }) => {
                          this.setState({ startDate, endDate });
                        }} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => {
                          if ("startDate" == focusedInput) {
                            this.setState({ focusedInput });
                          }
                        }}
                      />

                      <button
                        onClick={() =>
                          this.setState({ focusedInput: "endDate" })
                        }
                      >
                        Salam
                      </button>
                    </div>

                    <div className="col-36 col-xl-8">
                      <button
                        onClick={() => {
                          this.props.fetchAvailableCars(begin, end);
                        }}
                        className="btn btn-primary w-100 btn-height"
                      >
                        {this.props.availableCarIsLoading ? (
                          <>
                            <span
                              class="spinner-grow spinner-grow-sm"
                              role="status"
                              aria-hidden="true"
                            />
                            Aranıyor...
                          </>
                        ) : (
                          "ara"
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
    );
  }
}

export default withRedux(SearchBar);
