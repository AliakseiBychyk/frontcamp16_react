import React, { Component } from 'react';

export default class Post extends Component {
  constructor() {
    super();

    this.state = {
      post: {}
    };

    this.fetchPost = this.fetchPost.bind(this);
    this.renderTags = this.renderTags.bind(this);
  }

  componentWillMount() {
    this.fetchPost(this.props.params.postId);
  }
  
  componentWillReceiveProps(nextProps) {
    this.fetchPost(nextProps.params.postId);
  }

  fetchPost(postId) {
    console.log(this.props.params.postId)
    fetch(`http://localhost:8000/blog/json/${postId}`)
      .then(response => response.json())
      .then((post) => {
        console.log(post)
        this.setState({ post: post })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderTags() {
    if (!(this.state.post.tags && this.state.post.tags.length)) return null;

    return this.state.post.tags.map((tag) => (<span>{tag + ' '}</span>));
  }

  render() {
    console.log(this.state.post);
    return (
      <div className="container">
        {this.props.params.postId}
        <h3 key={this.state.post._id}>{'Author: ' + this.state.post.author}</h3>
        <h1 key={this.state.post._id}>{this.state.post.title}</h1>
        <h2 key={this.state.post._id}>{this.state.post.body}</h2>
        <h4>Tags:</h4> 
        <h4 key={this.state.post._id}>{this.renderTags()}
        </h4>
        <h5 key={this.state.post._id}>{this.state.post.date}</h5>
      </div>
    );
  }
}