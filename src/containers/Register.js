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
        <div className="registrationBlock">
          <form>
          <label className="userName">
          Username:
          <input type="text" />
          </label>
          <br/>
          <br/>
          <label className="userPassword">
          Password:
          <input type="text" />
          </label>
          <br />
          <br />
          <input className="userRegistration" type="submit" value="Register" />
          </form>
        </div>
      )
    }
}
