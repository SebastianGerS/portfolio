import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Close from 'react-icons/lib/fa/times-circle';
import PropTypes from 'prop-types';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() {
    const { toggleNavigation } = this.props;
    toggleNavigation();
  }

  render() {
    return (
      <div className="nav-modal">
        <div className="nav-icon">
          <Close onClick={this.close} size={48} />
        </div>
        <nav>
          <NavLink to="/" exact onClick={this.close}>
            Home
          </NavLink>
          <NavLink to="/portfolio" onClick={this.close}>
            Portfolio
          </NavLink>
          <NavLink to="/cv" onClick={this.close}>
            CV
          </NavLink>
          <NavLink to="/links" onClick={this.close}>
            Links
          </NavLink>
        </nav>
      </div>
    );
  }
}
NavBar.propTypes = {
  toggleNavigation: PropTypes.func.isRequired,
};

export default NavBar;
