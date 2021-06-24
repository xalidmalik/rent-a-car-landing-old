import React from "react";
import { Time } from "../../../Helpers/Time";

class TimePicker extends React.Component {
  state = {
    selectedTime: Time[0].value,
    showTime: false
  };

  render() {
    let { isOpen, isRight } = this.props;
    return (
      <div className="TimePickerWrapper">
        {this.state.showTime || isOpen ? (
          <div
            style={{
              top: this.props.openDirection == "down" ? "10px" : null,
              left: isRight ? "calc(50% + 21px)" : "9px"
            }}
            className="TimePickerInner shadow-sm"
          >
            <label className="font-weight-bold">Saat</label>

            <div size="10" className="TimePicker">
              {Time.map((i, index) => {
                return (
                  <span
                    key={index}
                    onClick={() => {
                      this.setState({
                        selectedTime: i.value,
                        showTime: false
                      });
                      this.props.selectedTime(i.value);
                    }}
                    value={i.value}
                  >
                    {i.data}
                  </span>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default TimePicker;
