import React, { Component } from 'react';
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
import NavButton from './common/NavButton'
import { items } from '../../public/data';
const { string } = React.PropTypes;

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <ul className="nav-items">
          <li>
            <NavButton toPath='home' title="Home" />
          </li>
          <li>
            <NavButton toPath='about' title="About Us" />
          </li>
          {items.map((item) =>
            <li><NavButton toPath={item.tag} title={item.title} /></li>
            )}
        </ul>
      </div>
    );
  }
}

export default NavBar;