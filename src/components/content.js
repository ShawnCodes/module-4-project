import React, { Component } from 'react';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css'
import Update from './update'

export default class Content extends Component {
  constructor(props) {
    super(props);
    AOS.init()

    this.state={
      isHovered: false
    }
  }

  mouseOver = (event) => {
    const isHovered = this.state.isHovered
    this.setState({
      isHovered: !isHovered
    })
  }

  render() {
    const HoverContent = this.state.isHovered ?
    <Update itemNameUpdate={this.props.itemNameUpdate} itemImageUpdate={this.props.itemImageUpdate} itemPriceUpdate={this.props.itemPriceUpdate} inputUpdateItem={this.props.inputUpdateItem}/>
     :
     null

    return (
        <div id={this.props.id} onDoubleClick={this.mouseOver}>
          <img id="images" src={this.props.src} key={this.props.id} alt={this.props.name} onDragEnd={this.props.deleteItem} />
          {HoverContent}
        </div>
    )
  }
}

// data-aos="fade" data-aos-delay="10000" data-aos-duration="500"
