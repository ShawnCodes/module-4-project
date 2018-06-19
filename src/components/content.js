import React, { Component } from 'react';


class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const filterItems = this.props.contents.filter(content => {
      return content.name.includes(this.props.itemSearch)
    }).map((content, index) => {
      return (<div><img id="images" src={content.img_src} /></div>)
    })

    const allItems = this.props.contents.map((content, index) =>
            <div>
            <img id="images" src={content.img_src} />
            </div>)
    return (
      <div>
        {this.props.itemSearch === "" ? allItems : filterItems}
      </div>
    );
  }
}

export default Content;
