
import React, { Component } from 'react';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css'

class Content extends Component {
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
      return (<div id={content.id} data-aos="fade" data-aos-delay="10000" data-aos-duration="500"><img id="images" src={content.img_src} key={index} alt={content.name} /></div>)
    })

    const allItems = this.props.contents.map((content, index) =>
            <div id={content.id} data-aos="fade" data-aos-delay="10000" data-aos-duration="500">
            <img id="images" src={content.img_src} key={index} alt={content.name} onClick={this.props.deleteItem} />
            </div>)
    return (
      <div>
        {this.props.itemSearch === "" ? allItems : filterItems}
      </div>
    );
  }
}

export default Content
