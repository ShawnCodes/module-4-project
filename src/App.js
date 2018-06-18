import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import Footer from './components/footer';
import Content from './components/content';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="header">
      <Header/>
  </div>
      <div >
        <Menu/>
    </div>
        <div className="content">
          <Content/>
      </div>
          <div className="footer">
            <Footer/>
        </div>
      </div>
            );
  }
}

export default App;
