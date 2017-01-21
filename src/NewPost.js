import React from 'react';
import { Link } from 'react-router';

export default class NewPost extends React.Component { 
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container">
        <h1>New Post</h1>
        <p className="lead">You are going to add a new post</p>
        <br />
        <form>
          <div className="form-group">
            <input className="form-control" type="text" name="title" placeholder="Subject" />
          </div>
          <div className="form-group">
            <input className="form-control" type="text" name="body" placeholder="Post body" />
          </div>
          <div className="form-group">
            <input className="form-control" type="text" name="author" placeholder="Author" />
          </div>
        </form>
        <h4><Link to="/blog">Back to blog</Link></h4>
      </div>
    );
  }
}