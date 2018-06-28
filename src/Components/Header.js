import React, { Component } from 'react';
import logo from '../Assets/Images/logo.jpg';
import NavBar from './NavBar';
import NavButton from './NavButton';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarIsActive: false,
    };
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    this.setState(prevState => ({ navbarIsActive: !prevState.navbarIsActive }));
  }

  render() {
    const { navbarIsActive } = this.state;
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
       Sebastian Gerstel Sollerman
          <span>
       Full Stack Web Developer
          </span>
        </h1>
        { !navbarIsActive
          && <NavButton toggleNavigation={this.toggleNavigation} />
        }
        { navbarIsActive
          && <NavBar toggleNavigation={this.toggleNavigation} />
        }

      </header>
    );
  }
}


export default Header;
