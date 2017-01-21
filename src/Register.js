import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Register extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <h2>Sign up</h2>
        <div className="form-group">
          <input className="form-control" type="text" name="username" placeholder="Username" />  
        </div>
        <div className="form-group">
          <input className="form-control" type="text" name="email" placeholder="Email" />  
        </div> 
        <div className="form-group">
          <input className="form-control" type="text" name="password" placeholder="Password" />  
        </div>  
      </div>
    );
  }
}