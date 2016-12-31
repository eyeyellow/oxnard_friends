import React, { Component } from 'react';
import logo from '../images/friends-logo.jpg';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={logo} alt="logo" className="friends-logo" />
        <h1 className="title">Oxnard Friends of the Library</h1>
      </div>
    );
  }
}

export default Header;