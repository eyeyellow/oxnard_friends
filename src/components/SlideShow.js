import React, { Component } from 'react';
const { object } = React.PropTypes;
import SlideShowItem from './SlideShowItem';

class SlideShow extends Component {
  render() {
    const item = this.props.item
    const { title, image, id, imageClass } = item
    return (
      <div className="SlideShow">
        <ul id="slides">
          <SlideShowItem title={title} image={image} id={id} imageClass={imageClass} />
        </ul>
      </div>
    );
  }
}


SlideShow.propTypes = {
  item: object
}


export default SlideShow;