import React, { Component } from 'react';
const { string } = React.PropTypes;


class SlideShowItem extends Component {
  render() {
    return (
      <div className="SlideShowItem">
        <li>
          <h1 className="SlideShowItemTitle">{this.props.title}</h1>
          <img className={this.props.imageClass} alt="slide-item" src={require(`../../public/images/${this.props.image}`)} />
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