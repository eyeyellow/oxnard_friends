import React, { Component } from 'react';
const { string } = React.PropTypes;


class IconItem extends Component {
  render() {
    return (
      <td className="icon-item">
        <img role="presentation" className="svg-icon" src={require(`../../public/images/icons/${this.props.iconPath}`)} />
        <div className="icon-button" >
          {this.props.text}
        </div>
      </td>
    );
  }
}

IconItem.propTypes = {
  text: string
}

export default IconItem;