import React, { Component } from 'react';
import logo from '../images/friends-logo.jpg';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={logo} alt="logo" id="friends-logo" />
        <p>Header</p>
      </div>
    );
  }
}

export default Header;