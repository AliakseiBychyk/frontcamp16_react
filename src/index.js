import React from 'react';
import {render} from 'react-dom';
import Posts from './Posts';
import Post from './Post';
import NewPost from './NewPost';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { Link, Route, Router, browserHistory } from 'react-router';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Route>
    <Route path="/blog" component={Posts}>
      <Route path="/blog/:postId" component={Post} />        
    </Route> 
    <Route path="/newpost" component={NewPost} />   
  </Router>
  
), document.getElementById('root'));