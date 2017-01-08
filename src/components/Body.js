import React, { Component } from 'react';
import SlideShowContainer from './containers/SlideShowContainer';
import IconsContainer from './containers/IconsContainer';
import bookshelf from '../../public/images/inside-bookstore.jpg';

class Body extends Component {
  render() {
    return (
      <div className="body-container">
      <SlideShowContainer />
      <IconsContainer />
      <img src={bookshelf} alt="logo" className="bookshelf-image" />
      </div>
    );
  }
}

export default Body;