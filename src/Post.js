import React, { Component } from 'react';

export default class Post extends Component {
  constructor() {
    super();

    this.state = {
      post: {}
    };

    this.fetchPost = this.fetchPost.bind(this);
  }

  componentWillMount() {
    this.fetchPost(this.props.params.postId);
  }
  
  componentWillReceiveProps(nextProps) {
    this.fetchPost(nextProps.params.postId);
  }

  fetchPost(postId) {
    console.log(this.props.params.postId)
    fetch(`http://localhost:8000/blog/${postId}`)
      .then(response => response.json())
      .then((post) => {
        console.log(post)
        this.setState({post: post})
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.props.params.postId}
        <h3>{'Author: ' + this.state.post.author}</h3>
        <h1>{this.state.post.title}</h1>
        <h2>{this.state.post.body}</h2>
        <h4>Tags:</h4> 
        <h4>{this.state.post.tags.map(function(tag) {
          return <span>{tag + ' '}</span>;
        })}
        </h4>
        <h5>{this.state.post.date}</h5>
      </div>
    );
  }
}