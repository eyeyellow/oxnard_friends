import React, { Component } from 'react';
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <ul className="nav-items">
          <li>
            <Link to='home'>
              Home
            </Link>
          </li>
          <li>
            <Link to='about'>
              About
            </Link>
          </li>
          <li>
            <Link to='supportus'>
              Support Us
            </Link>
          </li>
          <li>
            <Link to='volunteer'>
              Volunteer
            </Link>
          </li>
          <li>
            <Link to='bookstore'>
              Bookstore
            </Link>
          </li>
          <li>
            <Link to='location'>
              Location
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;