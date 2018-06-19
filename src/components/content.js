import React, { Component } from 'react';


class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      {this.props.contents.map((content, index) =>
      <div>
      <img id="images" src={content.img_src} />
      </div>)}
      </div>
    );
  }
}

export default Content;
