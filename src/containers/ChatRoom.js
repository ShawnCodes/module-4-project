import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Message from '../components/Message.js';
const URL = 'http://localhost:10524/api/v1/messages'

class Chatroom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: []
    };
  }

  componentDidMount() {
    fetch(URL).then(res => res.json()).then(json => this.setState({chats: json}))
  }

  componentDidMount() {
    this.scrollToBot();
  }

  componentDidUpdate() {
    this.scrollToBot();
  }

  scrollToBot() {
    ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
  }

  submitMessage = (e) => {
    e.preventDefault();

    this.setState({
      chats: this.state.chats.concat([
        {
          username: "Austin Paley",
          content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
          img: "https://miro.medium.com/fit/c/240/240/1*MZHg53N_GtuEKJFirfMMhQ.png"
        }
      ])
    }, () => {
      ReactDOM.findDOMNode(this.refs.msg).value = "";
    });
  }

  render() {
    console.log("my chat state", this.state);
    const username = "Austin Paley";
    const {chats} = this.state;

    return (<div className="chatroom">
      <h3>Commerce App</h3>
      <ul className="chats" ref="chats">
        {chats.map((chat) => <Message key={chats.id} chat={chat} user={username}/>)}
      </ul>
      <form className="input" onSubmit={(e) => this.submitMessage(e)}>
        <input type="text" ref="msg"/>
        <input type="submit" value="Submit"/>
      </form>
    </div>);
  }
}

export default Chatroom;
