import React from 'react';
import SlideShow from '../../components/SlideShow';
import { items } from '../../../public/data';

const SlideShowContainer = React.createClass({

  render() {
    return (
      <div className="SlideShowContainer">
        <SlideShow items={items} />
      </div>
    );
  }
})

export default SlideShowContainer;