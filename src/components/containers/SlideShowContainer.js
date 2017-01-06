import React, { Component } from 'react';
import SlideShow from '../../components/SlideShow';
import { items } from '../../../public/data';

class SlideShowContainer extends Component {
  item() {
    return items[0]
  }
  render() {
    return (
      <div className="SlideShowContainer">
        <SlideShow item={this.item()} />
      </div>
    );
  }
}

export default SlideShowContainer;