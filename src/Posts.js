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
                {this.state.posts.map(function(post, id) {
                    return <Link to={`/${id}`} key={id}>{post.title}</Link>;
                })}
                {this.props.children}
            </div>
        );
    }
}