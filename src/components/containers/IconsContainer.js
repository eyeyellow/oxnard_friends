import React, { Component } from 'react';
import IconItem from '../../components/IconItem';
import { items } from '../../../public/data';
import About from '../../components/About';

class IconsContainer extends Component {
  render() {
    return (
      <div className="icons-container">
        <About />
        <table className="icons-table">
          <tbody>
            <tr>
              {items.map(function(item) {
                return <IconItem
                iconPath={item.svgIcon}
                toPath={item.tag}
                key={item.id}
                text={item.title} />
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default IconsContainer;