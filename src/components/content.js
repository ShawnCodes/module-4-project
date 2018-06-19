import React, { Component } from 'react';


class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
      <div>
      {this.props.contents.map((content, index) =>
      <div>
      <img id="images" src={content.img_src} />
    <div className="content" key={content.id}>
      <a className="header">{content.name}</a>
    <div className="description">
      {content['description']}
      </div>
      </div>
      </div>)}
      </div>
      </div>
    );
  }
}

export default Content;
