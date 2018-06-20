import React, { Component } from 'react';
export default class CreateItem extends Component {
  render() {
    return (
      <div>
        <h3>Item for Sale</h3>
        <form onSubmit={this.props.postNewItem}>
        <label>
          Item Name:
          <input type="text" name="name" value={this.props.itemName} onChange={this.props.inputNewItem} />
        </label>
        <label>
          Item Image:
          <input type="text" name="image" value={this.props.itemImage} onChange={this.props.inputNewItem} />
        </label>
        <label>
          Asking Price:
          <input type="text"q name="price" value={this.props.itemPrice} onChange={this.props.inputNewItem} />
        </label>
          <input type="submit" value="Post for sale"/>
        </form>
      </div>
    );
  }
}
