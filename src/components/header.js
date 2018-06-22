import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './search'

class Header extends Component {
  render() {
    console.log(this.props, "header")
    return (
      <div className="topnav">
      <Link to={'/'} id="home-button" href="#home">Home</Link>
      <a>My Items</a>
      <a>My Wishlist</a>
      <a>Categories</a>
      {this.props.currentUserId === "" && this.props.currentUserName == "" ? <Link to={'/register'} id="registration-button">Register</Link> : <Link to={'/login'} id="login-button">Login</Link>}
      <Search handleSearch={this.props.handleSearch}/>
      </div>
    );
  }
}

export default Header;
