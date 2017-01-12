import React from 'react';
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const { string } = React.PropTypes;

const NavButton = React.createClass({

  render() {
    return (
      <div className="nav-button">
        <Link className="link-text" to={this.props.toPath}>{this.props.text}
        </Link>
      </div>
    );
  }
})

NavButton.propTypes = {
  toPath: string,
  text: string
}

export default NavButton;