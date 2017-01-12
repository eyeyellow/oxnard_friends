import React, { Component } from 'react';
const { string } = React.PropTypes;
import NavButton from './common/NavButton';


class IconItem extends Component {
  render() {
    return (
      <td className="icon-item">
        <img role="presentation" className="svg-icon" src={require(`../../public/images/icons/${this.props.iconPath}`)} />
        <div className="icon-button" >
          <NavButton toPath={this.props.toPath} text={this.props.text} />
        </div>
      </td>
    );
  }
}

IconItem.propTypes = {
  text: string,
  toPath: string,
  iconPath: string
}

export default IconItem;