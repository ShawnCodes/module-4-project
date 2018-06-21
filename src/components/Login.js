import React from 'react';

const Login = (props) => {
console.log(props)
  return(
    <div className="registrationBlock">
      <form>
      <label className="userName">
      Username:
      <input type="text" name="user" value={props.UserName} onChange={props.existingAccountInput}/>
      </label>
      <br/>
      <br/>
      <label className="userPassword">
      Password:
      <input type="password" name="pass" value={props.UserPassword} onChange={props.existingAccountInput}/>
      </label>
      <br />
      <br />
      <input className="userRegistration" type="submit" value="Login" onSubmit={props.currentAccount} />
      </form>
    </div>
  )
}

export default Login;
