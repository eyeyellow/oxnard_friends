import React, { Component } from 'react';
import logo from '../../public/images/friends-logo.jpg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <table className="header-table">
          <tbody>
            <tr>
              <td>
                <img src={logo} alt="logo" className="friends-logo" />
              </td>
              <td>
                <h1 className="title">Oxnard Friends of the Library</h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Header;