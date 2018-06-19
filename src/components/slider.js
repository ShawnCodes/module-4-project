import React from 'react'
import Slider from 'react-slick';

export default class SliderRender extends React.Component{
  render(){
    return(
      <div>
      <Slider {...this.props}>
        <div>
          <img src={this.props.contents[0].img_src} />
        </div>
        <div>
          <img src={this.props.contents[1].img_src} />
        </div>
        <div>
          <img src={this.props.contents[2].img_src} />
        </div>
        <div>
          <img src={this.props.contents[3].img_src} />
        </div>
      </Slider>
      <br />
      <br />
    </div>
    )
  }

}
