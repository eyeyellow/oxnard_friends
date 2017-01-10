import React from 'react';
import Body from './Body';
import Footer from './Footer';

const Home = React.createClass({

  render() {
    return (
      <div className="Home">
        <Body />
        <Footer />
      </div>
    );
  }
})

export default Home;