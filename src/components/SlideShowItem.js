import React, { Component } from 'react';
const { string } = React.PropTypes;


class SlideShowItem extends Component {
  render() {
    return (
      <div>
        <li className={this.props.visibility} >
          <div className={this.props.slideClass} >
            <h1 className="slide-header">{this.props.title}</h1>
            <img className={this.props.imageClass} alt="slide-item" src={require(`../../public/images/${this.props.image}`)} />
          </div>
        </li>
      </div>
    );
  }
}

SlideShowItem.propTypes = {
  title: string,
  image: string,
  id: string,
  imageClass: string,
  visibility: string,
  slideClass: string
}

export default SlideShowItem;