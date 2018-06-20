import React, { Component } from 'react';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css'

export default class Content extends Component {
  constructor(props) {
    super(props);
    AOS.init()

    this.state={
      isClicked: false
    }
  }

  render() {
    return (
      <div id={this.props.id} data-aos="fade" data-aos-delay="10000" data-aos-duration="500">
        <img id="images" src={this.props.src} key={this.props.id} alt={this.props.name} onClick={this.props.deleteItem} />
      </div>
    );
  }
}
