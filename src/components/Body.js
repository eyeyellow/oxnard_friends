import React, { Component } from 'react';
import SlideShowContainer from './containers/SlideShowContainer';

class Body extends Component {
  render() {
    return (
      <div className="body-container">
      <SlideShowContainer />
      </div>
    );
  }
}

export default Body;