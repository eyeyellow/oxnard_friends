import React, { Component } from 'react';
import insideBookstore from '../images/inside-bookstore.jpg';
import libraryFriends from '../images/library-friends.jpg';
import outsideBookstore from '../images/outside-bookstore.jpg';
import outsideLibrary from '../images/outside-library.jpg';

class Body extends Component {
  render() {
    return (
      <div className="Body">
      <img src={insideBookstore} alt="insideBookstore" className="inside-bookstore" />
      <img src={libraryFriends} alt="libraryFriends" className="library-friends" />
      <img src={outsideLibrary} alt="outsideLibrary" className="outside-library" />
      <img src={outsideBookstore} alt="outsideBookstore" className="outside-bookstore" />
      </div>
    );
  }
}

export default Body;