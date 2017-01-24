import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
    constructor() {
      super();
    }

  render() {
    return (
      <div className = "container" >
<<<<<<< HEAD
        <h1> "WELCOME TO ALEKS'S BLOG" </h1>
=======
        <h1> "WELCOME TO ALEKS\'S BLOG" </h1>
>>>>>>> c6e409df9959723dd5a067d2dce09ee481d5803a
        <h4> <Link to = "/login" > Log in </Link></h4>
        <h4> <Link to="/register" > Sing up </Link></h4>
        {this.props.children}
      </div>
    );
  }
}
