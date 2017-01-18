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
        fetch(`http://localhost:8000/blog/${postId}`).then(r => r.json())
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
                <h1>{this.state.post.author}</h1>
                <h2>{this.state.post.title}</h2>
                <h3>{this.state.post.body}</h3>
                <h3>{this.state.post.tags}</h3>
            </div>
        );
    }
}