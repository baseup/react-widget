import React, { Component } from "react";
import DayPicker from "./DayPicker";
import Slots from "./Slots";
import { slots } from "../api";
import StaffPicker from "./StaffPicker";

class Widget extends Component {
  state = {
    day: new Date(),
    staff: null,
    slot: null
  };

  _onSlotSelect = (slot: object) => {
    console.log("Slot selected", slot);
    this.setState({ slot });
  };

  _onDaySelect = (day: Date) => {
    console.log("Day selected", day);
    this.setState({ day });
  };

  render() {
    const { day, staff, slot } = this.state;
    return (
      <div className="widget">
        Widget here
        <DayPicker day={day} onSelect={this._onDaySelect} />
        <Slots slots={slots} selected={slot} onSelect={this._onSlotSelect} />
        <StaffPicker />
      </div>
    );
  }
}

export default Widget;
