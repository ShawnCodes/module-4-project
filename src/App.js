import React, {Component} from 'react';
import './App.css';
import ContentContainer from './components/contentcontainer';
import Header from './components/header';
import SliderRender from './components/slider'
import CreateItem from './components/createItem'
import ChatRoom from './containers/ChatRoom';
import { Route } from 'react-router-dom';
const URL = 'http://localhost:10524/api/v1/items'

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: [],
      itemSearch: '',
      itemName: '',
      itemPrice: '',
      itemImage: '',
      itemNameUpdate: '',
      itemPriceUpdate: '',
      itemImageUpdate: ''
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

inputUpdateItem = (event) => {
  const itemId = parseInt((event.target.parentNode.parentNode.parentNode.parentNode.id), 10)
  const specificItem = this.state.items.find(item => item.id === itemId)
  if (event.target.name === "name")
    this.setState({
      itemNameUpdate: specificItem.name
    })
  else if (event.target.name === "price")
    this.setState({
      itemPriceUpdate: specificItem.price
    })
  else if (event.target.name === "image")
    this.setState({
      itemImageUpdate: specificItem.img_src
    })
}

deleteItem = (event) => {
  const ItemId = parseInt((event.target.parentNode.id), 10)
  const newItems = (this.state.items.filter(item => item.id !== ItemId))
  this.setState({
    items: newItems
  })

  fetch(URL + "/" + ItemId, {
    method: 'delete'
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
      <ContentContainer contents={this.state.items} itemSearch={this.state.itemSearch} deleteItem={this.deleteItem} itemNameUpdate={this.state.itemNameUpdate} itemImageUpdate={this.state.itemImageUpdate} itemPriceUpdate={this.state.itemPriceUpdate} inputUpdateItem={this.inputUpdateItem}/>
      </div>
      <Route
        path="/create-item"
        render={ () => <CreateItem postNewItem={this.postNewItem} inputNewItem={this.inputNewItem} itemName={this.state.itemName} itemImage={this.state.itemImage} itemPrice={this.state.itemPrice} />} />
    <Route
      path='/chat'
      render={ () => <div className="Chat">
       <ChatRoom />
   </div> }
 />
    </div>)
}
}
