import React, { Component } from 'react';
export default class Search extends Component {
  render() {
    return (
      <div>
      <label>
      Search:
      <input type="text" name="searchtext" onChange={this.props.handleSearch} />
      </label>
      </div>
    );
  }
}
