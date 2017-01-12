import React, { Component } from 'react';
import NavButton from './common/NavButton'
import { items } from '../../public/data';

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <ul className="nav-items">
          <li>
            <NavButton toPath='home' text="Home" />
          </li>
          <li>
            <NavButton toPath='about' text="About Us" />
          </li>
          {items.map((item) =>
            <li key={item.id} ><NavButton toPath={item.tag} text={item.title} /></li>
            )}
        </ul>
      </div>
    );
  }
}

export default NavBar;