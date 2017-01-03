import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Support Us</li>
          <li>Volunteer</li>
          <li>Events</li>
          <li>Bookstore</li>
          <li>Location</li>
        </ul>
      </div>
    );
  }
}

export default NavBar;