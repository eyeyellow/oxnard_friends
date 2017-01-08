import React, { Component } from 'react';
const { string } = React.PropTypes;

class IconItem extends Component {
  render() {
    return (
      <td className="icon-item">
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