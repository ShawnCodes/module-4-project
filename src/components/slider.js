import React from 'react'
import Slider from 'react-slick';

export default class SliderRender extends React.Component{
  render(){
    return(
      <div>
      <Slider {...this.props}>
        <div>
          <h2>1</h2>
        </div>
        <div>
          <h2>2</h2>
        </div>
        <div>
          <h2>3</h2>
        </div>
        <div>
          <h2>4</h2>
        </div>
      </Slider>
      <br />
      <br />
    </div>
    )
  }

}
