import React, { Component } from 'react';
import IconItem from '../../components/IconItem';
import { items } from '../../../public/data';
import About from '../../components/About';

class IconsContainer extends Component {
  render() {
    return (
      <div className="icons-container">
        <About className="about" />
        <table className="icons-table">
          <tbody>
            <tr>
              {items.map(function(item) {
                return <IconItem iconPath={item.svgIcon} key={item.id} text={item.title} />
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default IconsContainer;