import React, { Component } from 'react';
import NavButton from './common/NavButton'
import { items } from '../../public/data';

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
            <li key={item.id} ><NavButton toPath={item.tag} title={item.title} /></li>
            )}
        </ul>
      </div>
    );
  }
}

export default NavBar;