import React, { Component } from 'react';
import Form from './form'

class Header extends Component {
  render() {
    return (
      <div className="topnav">
        <a id="home-button" href="#home">Home</a>
      <a>My Items</a>
      <a>My Wishlist</a>
      <a>Categories</a>
      <Form handleSearch={this.props.handleSearch}/>
      </div>
    );
  }
}

export default Header;
