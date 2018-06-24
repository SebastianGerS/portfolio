import React from 'react';
import logo from '../Assets/Images/logo.jpg';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">
        Sebastian Gerstel Sollerman
      <span>
        Full Stack Web Developer
      </span>
    </h1>
  </header>
);

export default Header;
