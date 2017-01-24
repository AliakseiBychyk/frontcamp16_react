import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
    constructor() {
      super();
    
   
    }   
      const greetings =  'WELCOME TO ALEKS\'S BLOG'; 
  render() {
    return (
      <div className = "container" >
        <h1> {greetings} </h1>
        {user && <h3> You are currntly logged in as {this.props.user.username} </h3>}
        <h4> <Link to = "/login" > Log in </Link></h4>
        <h4> <Link to="/register" > Sing up </Link></h4>
        {this.props.children}
      </div>
    );
  }
}