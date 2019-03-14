import React, { Component } from "react";
import moment from "moment";
import DayButton from "./DayButton";

type Props = {
  day: Date;
  onSelect: (arg0: Date) => void;
};

class DayPicker extends Component<Props> {
  _getDays = () => {
    const days = [];
    for (let i = -4; i < 4; i++) {
      days.push(
        moment()
          .add(i, "days")
          .toDate()
      );
    }
    return days;
  };
  render() {
    const days = this._getDays();
    const { day } = this.props;
    return (
      <div className="day-picker">
        {days.map(d => (
          <DayButton selected={day.getDate() === d.getDate()} day={d} key={d.toString()} onSelect={this.props.onSelect} />
        ))}
      </div>
    );
  }
}

export default DayPicker;
