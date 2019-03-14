import React, { Component } from "react";
import "./App.scss";
import Widget from "./components/Widget";
import { Service, services } from "./api";

type ServicePickerProps = {
  onSelect: (service: Service) => void;
};

class ServicePicker extends React.PureComponent<ServicePickerProps> {
  render() {
    return (
      <ul>
        {services.map(s => (
          <li onClick={() => this.props.onSelect(s)} key={s.id}>
            {s.title}
          </li>
        ))}
      </ul>
    );
  }
}

class App extends Component<{}, { service: Service | null }> {
  state = {
    service: null
  };
  render() {
    const { service } = this.state;
    return (
      <div className="App">
        {service ? (
          <div>
            <Widget />
          </div>
        ) : (
          <ServicePicker
            onSelect={(service: Service) => this.setState({ service })}
          />
        )}
      </div>
    );
  }
}

export default App;
