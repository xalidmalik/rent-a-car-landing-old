import React, { Component } from "react";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import TimePicker from "../TimePicker";
import withRedux from "../../../Hoc/withRedux";
import History from "../../../Helpers/History";

class DatePicker extends Component {
  state = {
    date: null,
    focusedInput: null,
    startDate: null,
    endDate: null,
    beginTime: null,
    endTime: null,
    endTimeisShow: false,
    startTimeIsShow: false,
    fetchStart: null,
    fetchEnd: null
  };

  componentDidUpdate() {
    this.props.endDate && this.props.endDate(this.state.fetchStart);
    this.props.startDate && this.props.startDate(this.state.fetchEnd);
  }

  render() {
    // const minWidth = window.matchMedia("max-width: 575.98px");
    return (
      <>
        {/* {minWidth.matches ? <h1>merhaba</h1> : null} */}
        <DateRangePicker
          displayFormat={() => "DD.MM.YYYY - (HH:mm)"}
          hideKeyboardShortcutsPanel={true}
          openDirection={this.props.openDirection}
          startDatePlaceholderText={"Başlangıç Tarihi"}
          startDateId={"dateStartId"}
          endDatePlaceholderText={"Bitiş Tarihi"}
          endDateId={"dateEndId"}
          required={true}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => {
            let begindDate = new Date(startDate);

            if (this.state.startDate != startDate) {
              this.setState({
                startDate: moment(begindDate),
                startTimeIsShow: true,
                focusedInput: null
              });
            }

            if (this.state.endDate != endDate) {
              this.setState({
                endDate: endDate,
                endTimeisShow: true,
                focusedInput: null
              });
            }
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => {
            if (focusedInput == "startDate") {
              this.setState({
                focusedInput: "startDate"
              });
            }
          }}
        />

        <TimePicker
          openDirection={this.props.openDirection}
          selectedTime={time => {
            let startFullDate = new Date(this.state.startDate).setHours(time);
            // alert(moment(startFullDate));
            this.setState({
              beginTime: time,
              focusedInput: "endDate",
              startTimeIsShow: false,
              startDate: moment(startFullDate),
              fetchStart: moment(new Date(startFullDate)).format(
                "MM/DD/YYYY HH:mm"
              )
            });
          }}
          isOpen={this.state.startTimeIsShow}
        />
        <TimePicker
          openDirection={this.props.openDirection}
          isRight={true}
          selectedTime={time => {
            let endFullDate = new Date(this.state.endDate).setHours(time);
            this.setState({
              endTime: time,
              focusedInput: null,
              endTimeisShow: false,
              endDate: moment(endFullDate),
              fetchEnd: moment(new Date(endFullDate)).format("MM/DD/YYYY HH:mm")
            });
          }}
          isOpen={this.state.endTimeisShow}
        />
      </>
    );
  }
}
export default DatePicker;
