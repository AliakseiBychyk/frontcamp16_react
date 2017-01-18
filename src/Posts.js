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
      fetch('http://localhost:8000/blog')
            .then(response => response.json())
            .then((data) => {
                this.setState({posts: data.posts})
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
          <div>
              <h1> Here are some posts </h1>
              <div>
                <ul>
                {this.state.posts.map(function (post, id) {
                  return (
                    <li>
                      <Link to={`/${id}`} key={id}>{post.title}</Link>
                    </li>);
                })}
                </ul>
                {this.props.children}
              </div>
          </div>
        );
    }
}