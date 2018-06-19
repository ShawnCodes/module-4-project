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
      items: [],
      itemSearch: ''
    }

    this.settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    }
  }

handleSearch = (event) => {
  const itemSearch = event.target.value
  this.setState({
    itemSearch
  })
}

componentDidMount() {
  fetch(URL).then(res => res.json()).then(json => this.setState({items: json}))
}

render() {
  console.log(this.state.itemSearch)
  const Validimages = this.state.items.length !== 0
  return (
    <div className="container">
      <div className="header">
        <Header handleSearch={this.handleSearch}/>
      </div>
      <div className="content">
        {Validimages ? <SliderRender {...this.settings} contents={this.state.items} /> : null}
      <Content contents={this.state.items} itemSearch={this.state.itemSearch}/>
      </div>
    </div>)
}
}

export default App;
