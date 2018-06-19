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
      <div className='search'>
      <label>
      <input placeholder="Search" type="text" name="searchtext" onChange={this.props.handleSearch} />
      </label>
      </div>
    );
  }
}
