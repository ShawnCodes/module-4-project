import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './search'

class Header extends Component {
  render() {
    return (
      <div className="topnav">
      <Link to={'/'} id="home-button" href="#home">Home</Link>
      <a>My Items</a>
      <a>My Wishlist</a>
      <a>Categories</a>
      <Search handleSearch={this.props.handleSearch}/>
      </div>
    );
  }
}

export default Header;
