import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          value: ''
        }
    }

    render(){
      return(
        <div className={"registrationBlock"}>
          <form onSubmit={this.props.newAccount}>
          <label className="userName">
          Username:
          <input type="text" name="user" />
          </label>
          <br/>
          <br/>
          <label className="userPassword">
          Password:
          <input type="password" name="pass" />
          </label>
          <br />
          <br />
          <input className="userRegistration" type="submit" value="Register" />
          </form>
        </div>
      )
    }
}
