import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Header from './components/header';

class App extends Component {
  constructor(){
    super()

    this.state={
      value: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:10524/api/v1/items')
    .then(res => res.json())
    .then(res => console.log(res))
  }

  render() {
    return (
      <div className="container">
      <div className="header">
      <Header/>
  </div>
        <div className="content">
          <Content />
      </div>
      </div>
            );
  }
}

export default App;
