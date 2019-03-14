import React, { Component } from "react";
import { Slot, slots } from "../api";

type Props = {
  slots: Slot[];
  selected: Slot | null;
  onSelect: (arg0: Slot) => void;
};

class Slots extends Component<Props> {
  render() {
    return <div className="slots">
    <ul>
      {slots.map(s => <li key={s.start}>{s.start}</li>)}
    </ul>
    </div>;
  }
}

export default Slots;
