import React, { Component } from 'react';
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <ul className="nav-items">
          <li>
            <div className="link-button" >
              <Link className="link-text" to='home'>
                Home
              </Link>
            </div>
          </li>
          <li>
            <div className="link-button">
              <Link className="link-text" to='about'>
                About
              </Link>
            </div>
          </li>
          <li>
            <div className="link-button">
              <Link className="link-text" to='supportus'>
                Support Us
              </Link>
            </div>
          </li>
          <li>
            <div className="link-button">
              <Link className="link-text" to='volunteer'>
                Volunteer
              </Link>
            </div>
          </li>
          <li>
            <div className="link-button">
              <Link className="link-text" to='bookstore'>
                Bookstore
              </Link>
            </div>
          </li>
          <li>
            <div className="link-button">
              <Link className="link-text" to='location'>
                Location
              </Link>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;