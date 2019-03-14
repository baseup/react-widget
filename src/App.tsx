import React, { Component } from 'react';
import './App.scss';
import Widget from './components/Widget';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Widget />
      </div>
    );
  }
}

export default App;
