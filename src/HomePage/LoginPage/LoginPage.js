import React, { Component } from 'react';
import './LoginPage.css';
import AppEffect from '../../AppEffect'

class LoginPage extends Component {
  render() {
    return (
        <AppEffect>
        <div className="login-container">
<form action="" className="form-login">
 <ul className="login-nav">
   <li className="login-nav__item active">
     <a href="#">Sign In</a>
   </li>
   <li className="login-nav__item">
     <a href="#">Sign Up</a>
   </li>
 </ul>
 <label for="login-input-user" className="login__label">
   Username
 </label>
 <input id="login-input-user" className="login__input" type="text" />
 <label for="login-input-password" className="login__label">
   Password
 </label>
 <input id="login-input-password" className="login__input" type="password" />
 <label for="login-sign-up" className="login__label--checkbox">
   <input id="login-sign-up" type="checkbox" className="login__input--checkbox" />
   Keep me Signed in
 </label>
 <button className="login__submit" disabled>Sign in</button>
</form>
<a href="#" className="login__forgot">Forgot Password?</a>
</div>
        </AppEffect>
    );
  }
}

export default LoginPage;
