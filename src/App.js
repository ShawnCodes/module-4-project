import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Header from './components/header';
const URL = 'http://localhost:10524/api/v1/items'

class App extends Component {
  state = {
    items: []
  }


componentDidMount() {
  fetch(URL).then(res => res.json()).then(json => this.setState({items: json}))
}

render() {
  return (
    <div className="container">
    <div className="header">
      <Header/>
    </div>
    <div className="content">
      <Content contents={this.state.items}/>
    </div>
  </div>);
}
}

export default App;
