import React, { Component } from 'react';


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[]
    }
  }
  render() {
    return (
      <div>
      {/* <div>
      {this.props.items.map((item, index) =>
      <div onClick={this.props.someFunction}>
      <div class="image">
      <img src={item.img} />
      </div>
      <div class="content" key={index}>
      <a class="header">{item.name}</a>
      <div class="description">
      {item['description']}
      </div>
      </div>
      </div>)}
      </div> */}
      </div>
    );
  }
}

export default Content;
