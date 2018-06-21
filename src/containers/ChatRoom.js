import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

import Message from '../components/Message.js';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [{
                username: "Austin Paley",
                content: <p>Hello World!</p>,
                img: "https://miro.medium.com/fit/c/240/240/1*MZHg53N_GtuEKJFirfMMhQ.png",
            }, {
                username: "Alice Chen",
                content: <p>I'm just testing this</p>,
                img: "https://miro.medium.com/fit/c/240/240/1*MZHg53N_GtuEKJFirfMMhQ.png",
            }, {
                username: "Austin Paley",
                content: <p>we'll probably need sockets</p>,
                img: "https://miro.medium.com/fit/c/240/240/1*MZHg53N_GtuEKJFirfMMhQ.png",
            }, {
                username: "Shawn Tannor",
                content: <p>Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.</p>,
                img: "https://miro.medium.com/fit/c/240/240/1*MZHg53N_GtuEKJFirfMMhQ.png",
            }, {
                username: "Austin Paley",
                content: <p>So</p>,
                img: "https://miro.medium.com/fit/c/240/240/1*MZHg53N_GtuEKJFirfMMhQ.png",
            }, {
                username: "Austin Paley",
                content: <p>Idk if we should do this before auth</p>,
                img: "https://miro.medium.com/fit/c/240/240/1*MZHg53N_GtuEKJFirfMMhQ.png",
            }, {
                username: "Austin Paley",
                content: <p>But it is necessary</p>,
                img: "https://miro.medium.com/fit/c/240/240/1*MZHg53N_GtuEKJFirfMMhQ.png",
            }, {
                username: "Shawn Tannor",
                content: <p>Definitely! Sounds great!</p>,
                img: "https://miro.medium.com/fit/c/240/240/1*MZHg53N_GtuEKJFirfMMhQ.png",
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
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

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "Austin Paley",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "https://miro.medium.com/fit/c/240/240/1*MZHg53N_GtuEKJFirfMMhQ.png",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = "Austin Paley";
        const { chats } = this.state;

        return (
            <div className="chatroom">
                <h3>Commerce App</h3>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat) =>
                            <Message chat={chat} user={username} />
                        )
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Chatroom;
