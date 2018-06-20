import React, { Component } from 'react';
import AOS from 'aos';
import Content from './content'
import '../../node_modules/aos/dist/aos.css'

export default class ContentContainer extends Component {
  constructor(props) {
    super(props);
    AOS.init()

    this.state={
      isClicked: false
    }
  }

  componentWillReceiveProps(){
    AOS.refresh()
  }
  render() {
    const filterItems = this.props.contents.filter(content => {
      return content.name.toLowerCase().includes(this.props.itemSearch.toLowerCase())
    }).map((content, index) => {
      return (<Content id={content.id} src={content.img_src} name={content.name} deleteItem={this.props.deleteItem} />)
    })

    const allItems = this.props.contents.map((content, index) => {
      return (<Content id={content.id} src={content.img_src} name={content.name} deleteItem={this.props.deleteItem} />)
    })

    return (
      <div>
        {this.props.itemSearch === "" ? allItems : filterItems}
      </div>
    );
  }
}
