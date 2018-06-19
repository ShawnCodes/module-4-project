import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Header from './components/header';
import SliderRender from './components/slider'
const URL = 'http://localhost:10524/api/v1/items'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: []
    }

    this.settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }


componentDidMount() {
  fetch(URL).then(res => res.json()).then(json => this.setState({items: json}))
}

render() {
  const Validimages = this.state.items.length !== 0
  return (
    <div className="container">
      <div className="header">
        <Header/>
      </div>
      <div className="content">
        {Validimages ? <SliderRender {...this.settings} contents={this.state.items} /> : null}
      <Content contents={this.state.items}/>
      </div>
    </div>)
}
}

export default App;
