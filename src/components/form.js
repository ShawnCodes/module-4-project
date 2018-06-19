import React, { Component } from 'react';
export default class Form extends Component {
  constructor(){
    super()

    this.state={
      value: ''
    }
  }
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
