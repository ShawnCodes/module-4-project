import React, { Component } from 'react';
import AOS from 'aos';
import Content from './content'
import '../../node_modules/aos/dist/aos.css'
import { Route, Link } from 'react-router-dom';

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
      return (<Link to={`/content/${content.id}`}><Content id={content.id} src={content.img_src} name={content.name} deleteItem={this.props.deleteItem} itemNameUpdate={this.props.itemNameUpdate} itemImageUpdate={this.props.itemImageUpdate} itemPriceUpdate={this.props.itemPriceUpdate} inputUpdateItem={this.props.inputUpdateItem} currentItem={this.props.currentItem}/></Link>)
    })

    const allItems = this.props.contents.map((content, index) => {
      return (<Link to={`/content/${content.id}`}><Content id={content.id} src={content.img_src} name={content.name} deleteItem={this.props.deleteItem} itemNameUpdate={this.props.itemNameUpdate} itemImageUpdate={this.props.itemImageUpdate} itemPriceUpdate={this.props.itemPriceUpdate} inputUpdateItem={this.props.inputUpdateItem} currentItem={this.props.currentItem}/></Link>)
    })

    return (
        <div>
          {this.props.itemSearch === "" ? allItems : filterItems}
        </div>
    );
  }
}
