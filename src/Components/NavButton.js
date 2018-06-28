import React, { Component } from 'react';
import Bars from 'react-icons/lib/fa/bars';
import PropTypes from 'prop-types';

class NavButton extends Component {
  constructor(props) {
    super(props);
    this.open = this.open.bind(this);
  }

  open() {
    const { toggleNavigation } = this.props;
    toggleNavigation();
  }

  render() {
    return (
      <div className="nav-icon">
        <Bars onClick={this.open} size={48} />
      </div>
    );
  }
}
NavButton.propTypes = {
  toggleNavigation: PropTypes.func.isRequired,
};
export default NavButton;
