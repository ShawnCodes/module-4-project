import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

export default class Register extends React.Component {

    render(){
      return(
        <div className={"registrationBlock"}>
          <form onSubmit={this.props.newAccount}>
          <label className="userName">
          Username:
          <input type="text" name="user" value={this.props.newUserName} onChange={this.props.newAccountInput} />
          </label>
          <br/>
          <br/>
          <label className="userPassword">
          Password:
          <input type="password" name="pass" value={this.props.newUserPassword} onChange={this.props.newAccountInput} />
          </label>
          <br />
          <br />
          <input className="userRegistration" type="submit" value="Register" />
          </form>
        </div>
      )
    }
}
