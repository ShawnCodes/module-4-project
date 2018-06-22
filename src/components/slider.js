import React from 'react'
import Slider from 'react-slick';

export default class SliderRender extends React.Component{
  render(){
    return(
      <center><div>
      <Slider {...this.props}>
        <div>
          <img className="slider-image" src={this.props.contents[6].img_src} alt={this.props.contents[6].name} />
        </div>
        <div>
          <img className="slider-image" src={this.props.contents[1].img_src} alt={this.props.contents[1].name} />
        </div>
        <div>
          <img className="slider-image" src={this.props.contents[2].img_src} alt={this.props.contents[2].name} />
        </div>
        <div>
          <img className="slider-image" src={this.props.contents[4].img_src} alt={this.props.contents[4].name} />
        </div>
      </Slider>
      <br />
      <br />
  </div></center>
    )
  }

}
