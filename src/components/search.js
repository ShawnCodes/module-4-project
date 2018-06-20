import React, { Component } from 'react';
export default class Search extends Component {
  render() {
    return (
      <div className='search'>
      <label>
      <input placeholder="Search" type="text" name="searchtext" onChange={this.props.handleSearch} />
      </label>
      </div>
    );
  }
}
