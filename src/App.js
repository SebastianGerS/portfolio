import React, { Component } from 'react';
import logo from './Assets/Images/logo.svg';

/* eslint-disable react/prefer-stateless-function, react/no-unescaped-entities */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
Sebastian Gerstel Sollerman's -- Portfolio
          </h1>
        </header>
        <h2 className="App-intro">
          COMING SOON
        </h2>
      </div>
    );
  }
}

export default App;
