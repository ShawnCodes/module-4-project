import React, { Component } from 'react';
export default class Update extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Update Item</h3>
        <form>
        <label>
          Item Name:
          <input type="text" name="name" value={this.props.itemNameUpdate} onChange={this.props.inputUpdateItem} />
        </label>
        <label>
          Item Image:
          <input type="text" name="image" value={this.props.itemImageUpdate} onChange={this.props.inputUpdateItem} />
        </label>
        <label>
          Asking Price:
          <input type="text"q name="price" value={this.props.itemPriceUpdate} onChange={this.props.inputUpdateItem} />
        </label>
          <input type="submit" value="Update Listing"/>
        </form>
      </div>
    );
  }
}
