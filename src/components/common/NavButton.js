import React from 'react';
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const { string } = React.PropTypes;

const NavButton = React.createClass({

  render() {
    return (
      <div className="link-button">
        <Link className="link-text" to={this.props.toPath}>{this.props.title}
        </Link>
      </div>
    );
  }
})

NavButton.propTypes = {
  toPath: string,
  title: string
}

export default NavButton;