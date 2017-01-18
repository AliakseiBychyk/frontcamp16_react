import React, { Component } from 'react';
import Post from './Post';
import { Link } from 'react-router';

export default class Posts extends Component {
    constructor() {
        super();

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8000/blog').then(r => r.json())
            .then((posts) => {
                this.setState({posts: posts})
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
          <div>
              <h1> Here are some posts </h1>
              <div>{this.state.posts}</div>
          </div>
        );
    }
}