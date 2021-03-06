import React, { Component } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import { Link } from 'react-router';

export default class Posts extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/blog/json')
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
      <div className="container">
        <h1> Blog Page </h1>
        <h2 className="lead"> Here are some post below, do you want to add new post?</h2>
        <form method="post" action="/newpost">
          <button className="btn, btn-default" type="submit"><Link to="/newpost">Yes</Link></button>
          &nbsp;
          <a href="/blog">
            <button className="btn, btn-primary" type="button">No</button>
          </a>  
        </form>
        <br />
        <div className="container">
        Latest Posts  
          <ul>
            {this.state.posts.map(function (post, id) {
              return (
                <li>
                  <Link to={`/blog/${id}`} key={id}>{post.title}</Link>
                </li>);
            })}
          </ul>
            {this.props.children}
          </div>
      </div>
    );
  }
}