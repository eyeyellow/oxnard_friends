import React, { Component } from 'react';
import SlideShowContainer from './containers/SlideShowContainer';
import IconsContainer from './containers/IconsContainer';

class Body extends Component {
  render() {
    return (
      <div className="body-container">
      <SlideShowContainer />
      <IconsContainer />
      </div>
    );
  }
}

export default Body;