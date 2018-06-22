import React, {Component} from 'react';
import './App.css';
import ContentContainer from './components/contentcontainer';
import Header from './components/header';
import SliderRender from './components/slider'
import CreateItem from './components/createItem'
import ChatRoom from './containers/ChatRoom';
import Register from './containers/Register';
import { Route } from 'react-router-dom';
import Login from './components/Login'
import Content from './components/content'
const URL = 'http://localhost:10524/api/v1/items'
const USERSURL = 'http://localhost:10524/api/v1/users'

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: [],
      users: [],
      itemSearch: '',
      itemName: '',
      itemPrice: '',
      itemImage: '',
      itemNameUpdate: '',
      itemPriceUpdate: '',
      itemImageUpdate: '',
      newUserName: '',
      newUserPassword: '',
      UserName: '',
      UserPassword: '',
      currentUserId: '',
      currentUserName: '',
      currentItem: '',
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

  fetch(USERSURL)
  .then(res => res.json())
  .then(json => this.setState({users: json}))
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
      img_src: this.state.itemImage,
      user_id: 1
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

updateItem = (event) => {
  event.preventDefault()
  fetch(URL + "/" + this.state.currentItem.id, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      name: this.state.itemNameUpdate,
      amount: 1,
      price: this.state.itemPriceUpdate,
      img_src: this.state.itemImageUpdate,
      user_id: 1
    })
  })
  .then(res => res.json())
  .then(response => console.log(response))
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
      itemNameUpdate: event.target.value
    })
  else if (event.target.name === "price")
    this.setState({
      itemPriceUpdate: event.target.value
    })
  else if (event.target.name === "image")
    this.setState({
      itemImageUpdate: event.target.value
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

newAccount = (event) => {
  event.preventDefault()

  fetch(USERSURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      name: this.state.newUserName,
      password: this.state.newUserPassword,
    })
  })
  .then(res => res.json())
  .then(this.setState({
    currentUserName: this.state.newUserName,
    newUserName: '',
    newUserPassword: '',
  }))
}

newAccountInput = (event) => {
  if (event.target.name === "user"){
    this.setState({
      newUserName: event.target.value
    })}
  else if (event.target.name === "pass"){
    this.setState({
      newUserPassword: event.target.value
    })}
}

currentAccount = (event) => {
  event.preventDefault()
  const CurrentUser = this.state.users.filter(user => user.name.toLowerCase() === this.state.UserName.toLowerCase()).find(user => user.password === this.state.UserPassword)
  if (CurrentUser){
    this.setState({
      currentUserId: CurrentUser.id,
      currentUserName: CurrentUser.name
    })
  }
}

existingAccountInput = (event) => {
  if (event.target.name === "user"){
    this.setState({
      UserName: event.target.value
    })}
  else if (event.target.name === "pass"){
    this.setState({
      UserPassword: event.target.value
    })}
}

currentItem = (id) => {
  const currentItem = this.state.items.find(item => item.id === id)
  this.setState({
    currentItem
  })
}

render() {
  const Validimages = this.state.items.length !== 0
  return (
    <div className="container">
      <div className="header">
        <Header handleSearch={this.handleSearch} currentUserId={this.state.currentUserId} currentUserName={this.state.currentUserName}/>
      </div>
    <Route
      exact path="/"
      render={() => <div className="content">
        {Validimages ? <SliderRender {...this.settings} contents={this.state.items} /> : null}
      <ContentContainer contents={this.state.items} itemSearch={this.state.itemSearch} deleteItem={this.deleteItem} itemNameUpdate={this.state.itemNameUpdate} itemImageUpdate={this.state.itemImageUpdate} itemPriceUpdate={this.state.itemPriceUpdate} inputUpdateItem={this.inputUpdateItem} currentItem={this.currentItem}/>
    </div>} />
    <Route
      path="/create-item"
      render={ () => <CreateItem postNewItem={this.postNewItem} inputNewItem={this.inputNewItem} itemName={this.state.itemName} itemImage={this.state.itemImage} itemPrice={this.state.itemPrice} />} />
    <Route
      path='/chat'
      render={ () => <div className="Chat">
       <ChatRoom />
       </div>} />
    <Route
      path='/register'
      render={ () => <Register newAccount={this.newAccount} newAccountInput={this.newAccountInput} newUserName={this.state.newUserName} newUserPassword={this.state.newUserPassword} />}
 />
    <Route
      path='/login'
      render={ () => <Login UserName={this.state.UserName} UserPassword={this.state.UserPassword} existingAccountInput={this.existingAccountInput} currentAccount={this.currentAccount}/>} />
    <Route path='/content/:contentid' render={ () => <Content id={this.state.currentItem.id} name={this.state.currentItem.name} src={this.state.currentItem.img_src} deleteItem={this.deleteItem} itemNameUpdate={this.itemNameUpdate} itemImageUpdate={this.itemImageUpdate} itemPriceUpdate={this.itemPriceUpdate} currentItem={this.currentItem} inputUpdateItem={this.inputUpdateItem} updateItem={this.updateItem} />} />
</div>
  )

}
}
