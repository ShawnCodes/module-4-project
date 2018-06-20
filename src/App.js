import React, {Component} from 'react';
import './App.css';
import Content from './components/content';
import Header from './components/header';
import SliderRender from './components/slider'
import CreateItem from './components/createItem'
const URL = 'http://localhost:10524/api/v1/items'

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: [],
      itemSearch: '',
      itemName: '',
      itemPrice: '',
      itemImage: ''
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
  fetch(URL)
  .then(res => res.json())
  .then(json => this.setState({items: json}))
}

postNewItem = (event) => {
  event.preventDefault()
  fetch(URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      name: this.state.itemName,
      amount: 1,
      price: this.state.itemPrice,
      img_src: this.state.itemImage
    })
  })
  .then(res => res.json())
  .then(response => this.setState({
    items: [...this.state.items, response],
    itemName: '',
    itemPrice: '',
    itemImage: ''
  }))
}

inputNewItem = (event) => {
  if (event.target.name === "name")
    this.setState({
      itemName: event.target.value
    })
  else if (event.target.name === "price")
    this.setState({
      itemPrice: event.target.value
    })
  else if (event.target.name === "image")
    this.setState({
      itemImage: event.target.value
    })
}

deleteItem = (event) => {
  const ItemId = event.target.parentNode.id
  const newItems = (this.state.items.filter(item => item.id != ItemId))
  this.setState({
    items: newItems
  })
}

render() {
  const Validimages = this.state.items.length !== 0
  return (
    <div className="container">
      <div className="header">
        <Header handleSearch={this.handleSearch}/>
      </div>
      <div className="content">
        {Validimages ? <SliderRender {...this.settings} contents={this.state.items} /> : null}
      <Content contents={this.state.items} itemSearch={this.state.itemSearch} deleteItem={this.deleteItem}/>
      </div>
      <CreateItem postNewItem={this.postNewItem} inputNewItem={this.inputNewItem} itemName={this.state.itemName} itemImage={this.state.itemImage} itemPrice={this.state.itemPrice} />
    </div>)
}
}
