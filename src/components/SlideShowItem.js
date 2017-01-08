import React, { Component } from 'react';
const { string } = React.PropTypes;


class SlideShowItem extends Component {
  render() {
    return (
      <div>
        <li className={this.props.visibility} >
          <table className={this.props.slideClass} >
            <tbody>
              <tr>
                <td>
                  <img className={this.props.imageClass} alt="slide-item" src={require(`../../public/images/${this.props.image}.jpg`)} />
                </td>
                <td className='textbox-cell'>
                  <div className='textbox-container' >
                    <h1 className="slide-header slide-text">{this.props.title}</h1>
                    <p className="slide-text">{this.props.slideText}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
  slideClass: string,
  slideText: string
}

export default SlideShowItem;