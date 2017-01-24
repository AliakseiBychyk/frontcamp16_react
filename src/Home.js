import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  constructor() {
      super();
    }

  render() {
    const greetings = 'WELCOME TO ALEKS\'S BLOG';
    return (
      <div className = "container" >
        <h1> {greetings} </h1>
        <h4> <Link to = "/login" > Log in </Link></h4>
        <h4> <Link to="/register" > Sing up </Link></h4>
        {this.props.children}
      </div>
    );
  }
}
