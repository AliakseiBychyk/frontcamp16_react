import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <h2>Log in</h2>
        <div className="form-group">
          <input className="form-control" type="text" name="username" placeholder="Username" />  
        </div> 
        <div className="form-group">
          <input className="form-control" type="text" name="password" placeholder="Password" />  
        </div>  
      </div>
    );
  }
}
