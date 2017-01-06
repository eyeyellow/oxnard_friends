import React, { Component } from 'react';
const { string } = React.PropTypes;


class SlideShowItem extends Component {
  render() {
    return (
      <div className="SlideShowItem">
        <li>
          <h1 className="SlideShowItemTitle">{this.props.title}</h1>
          <img alt="slide-item" src={require('../../public/images/' + this.props.image)} className={this.props.imageClass} />
        </li>
      </div>
    );
  }
}

SlideShowItem.propTypes = {
  title: string,
  image: string,
  id: string,
  imageClass: string
}

export default SlideShowItem;