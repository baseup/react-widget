import React, { Component } from "react";
import moment from 'moment';

type Props = {
  day: Date;
  selected: boolean;
  onSelect: (arg0: Date) => void;
};

class DayButton extends Component<Props> {
  render() {
    const { day, onSelect, selected } = this.props;
    const label = moment(day).format("dd D");
    return <div onClick={() => onSelect(day)} className={`day-button ${selected ? 'selected' : ''}`}>{label}</div>;
  }
}

export default DayButton;
