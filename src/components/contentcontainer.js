import React, { Component } from 'react';
import AOS from 'aos';
import Content from './content'
import '../../node_modules/aos/dist/aos.css'

export default class ContentContainer extends Component {
  constructor(props) {
    super(props);
    AOS.init()
  }



  componentWillReceiveProps(){
    AOS.refresh()
  }
  render() {
    const filterItems = this.props.contents.filter(content => {
      return content.name.toLowerCase().includes(this.props.itemSearch.toLowerCase())
    }).map((content, index) => {
      return (<Content id={content.id} src={content.img_src} name={content.name} deleteItem={this.props.deleteItem} mouseOver={this.mouseOver} itemNameUpdate={this.props.itemNameUpdate} itemImageUpdate={this.props.itemImageUpdate} itemPriceUpdate={this.props.itemPriceUpdate} inputUpdateItem={this.props.inputUpdateItem} />)
    })

    const allItems = this.props.contents.map((content, index) => {
      return (<Content id={content.id} src={content.img_src} name={content.name} deleteItem={this.props.deleteItem} mouseOver={this.mouseOver} itemNameUpdate={this.props.itemNameUpdate} itemImageUpdate={this.props.itemImageUpdate} itemPriceUpdate={this.props.itemPriceUpdate} inputUpdateItem={this.props.inputUpdateItem}/>)
    })

    return (
      <div>
        {this.props.itemSearch === "" ? allItems : filterItems}
      </div>
    );
  }
}
