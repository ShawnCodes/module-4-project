import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div class="topnav">
        <a id="home-button" class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    );
  }
}

export default Header;
